// src/hooks/useChat.ts
// Custom hook to handle chat with streaming responses from the Gemini backend

import { useState, useCallback } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface UseChatOptions {
  sessionId?: string;
  userId?: string;
}

export function useChat({ sessionId, userId }: UseChatOptions = {}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: 'user',
        content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);

      // Add a placeholder assistant message that will be streamed into
      const assistantMessageId = crypto.randomUUID();
      setMessages((prev) => [
        ...prev,
        {
          id: assistantMessageId,
          role: 'assistant',
          content: '',
          timestamp: new Date(),
        },
      ]);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            sessionId,
            userId,
          }),
        });

        if (!response.ok) throw new Error('Failed to get response');
        if (!response.body) throw new Error('No response body');

        // Stream the response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6);
              if (data === '[DONE]') break;

              try {
                const parsed = JSON.parse(data);
                if (parsed.text) {
                  // Append streamed text to the assistant message
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === assistantMessageId
                        ? { ...msg, content: msg.content + parsed.text }
                        : msg
                    )
                  );
                }
              } catch {
                // Skip malformed chunks
              }
            }
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
        // Remove the failed assistant placeholder
        setMessages((prev) => prev.filter((m) => m.id !== assistantMessageId));
      } finally {
        setIsLoading(false);
      }
    },
    [messages, sessionId, userId, isLoading]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  const loadSessionMessages = useCallback(
    async (loadSessionId: string) => {
      if (!userId) return;

      try {
        const res = await fetch(
          `/api/sessions/${loadSessionId}/messages?userId=${userId}`
        );
        const data = await res.json();

        if (data.messages) {
          setMessages(
            data.messages.map((m: { id: string; role: 'user' | 'assistant'; content: string; created_at: string }) => ({
              id: m.id,
              role: m.role,
              content: m.content,
              timestamp: new Date(m.created_at),
            }))
          );
        }
      } catch (err) {
        setError('Failed to load session history');
      }
    },
    [userId]
  );

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
    loadSessionMessages,
  };
}
