"use client";

import { motion } from 'framer-motion';
import { Mic, Volume2, Upload, PhoneOff, Maximize2, MicOff } from 'lucide-react';
import { useVoice } from '@/hooks/useVoice';
import { useChat } from '@/hooks/useChat';

export function VoiceMode() {
  const { sendMessage, messages } = useChat();

  const { isListening, isSpeaking, startListening, stopListening, speak, stopSpeaking, isSupported } = useVoice({
    onTranscript: (text) => {
      // Auto-send voice transcript to chat
      sendMessage(text);
    },
  });

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleSpeakLast = () => {
    // Read the last AI message aloud
    const lastAiMessage = [...messages].reverse().find((m) => m.role === 'assistant');
    if (lastAiMessage) {
      if (isSpeaking) {
        stopSpeaking();
      } else {
        speak(lastAiMessage.content);
      }
    }
  };

  // Get last AI caption to display
  const lastAiMessage = [...messages].reverse().find((m) => m.role === 'assistant');
  const caption = lastAiMessage
    ? lastAiMessage.content.replace(/```[\s\S]*?```/g, '[code block]').slice(0, 100) + (lastAiMessage.content.length > 100 ? '...' : '')
    : '"I can clarify the probability density function if you\'d like."';

  return (
    <div className="h-full bg-white dark:bg-[#0F1117] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col relative shadow-sm transition-colors duration-300">
      {/* Header */}
      <div className="flex justify-between items-center p-6 z-10">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isListening ? 'bg-indigo-500 animate-pulse' : 'bg-gray-400'}`}></span>
            Voice Mode
          </h2>
          <p className="text-gray-500 text-sm ml-4">
            {!isSupported
              ? 'Not supported in this browser'
              : isListening
              ? 'Listening...'
              : isSpeaking
              ? 'Speaking...'
              : 'Click mic to start'}
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Visualizer */}
      <div className="flex-1 flex flex-col items-center justify-center relative">
        {/* Glowing Orb */}
        <div className="relative flex items-center justify-center">
          {/* Outer Ripple 1 */}
          <motion.div
            animate={{
              scale: isListening ? [1, 1.6, 1] : [1, 1.4, 1],
              opacity: isListening ? [0.2, 0.5, 0.2] : [0.1, 0.4, 0.1]
            }}
            transition={{ duration: isListening ? 2 : 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-80 h-80 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/10 dark:border-indigo-500/20"
          />

          {/* Outer Ripple 2 */}
          <motion.div
            animate={{
              scale: isListening ? [1, 1.4, 1] : [1, 1.3, 1],
              opacity: isListening ? [0.3, 0.6, 0.3] : [0.2, 0.5, 0.2]
            }}
            transition={{ duration: isListening ? 1.5 : 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute w-72 h-72 rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 dark:border-indigo-500/30"
          />

          {/* Core Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: isListening
                ? ["0 0 80px rgba(99,102,241,0.6)", "0 0 120px rgba(99,102,241,0.9)", "0 0 80px rgba(99,102,241,0.6)"]
                : ["0 0 60px rgba(99,102,241,0.4)", "0 0 100px rgba(99,102,241,0.6)", "0 0 60px rgba(99,102,241,0.4)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-56 h-56 rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-blue-500 dark:from-indigo-500 dark:via-purple-600 dark:to-blue-600 blur-xl opacity-60 dark:opacity-80 z-0"
          />

          {/* Solid Core */}
          <motion.div
            animate={{ scale: [0.95, 1, 0.95] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-indigo-300 via-purple-400 to-blue-400 dark:from-indigo-400 dark:via-purple-500 dark:to-blue-500 shadow-inner z-10 opacity-90 mix-blend-multiply dark:mix-blend-screen"
          />
        </div>

        {/* Captions */}
        <div className="mt-12 text-center max-w-md px-6">
          <p className="text-gray-700 dark:text-gray-300 text-lg font-medium leading-relaxed">
            "{caption}"
          </p>
          <div className="flex justify-center gap-1 mt-4 h-4 items-end">
            {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: isListening || isSpeaking ? [4, h * 4, 4] : 4 }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                className="w-1 bg-indigo-500 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-8 pb-10">
        <div className="flex items-center justify-between max-w-sm mx-auto bg-white dark:bg-[#1A1C24] rounded-full p-2 px-6 border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-2xl">
          {/* Mic button */}
          <button
            onClick={handleMicClick}
            disabled={!isSupported}
            className={`p-4 rounded-full text-white transition-all shadow-lg hover:scale-105 ${
              isListening
                ? 'bg-red-500 shadow-red-500/30 hover:bg-red-400'
                : 'bg-indigo-600 shadow-indigo-600/30 hover:bg-indigo-500'
            } disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>

          <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700 mx-4"></div>

          {/* Speaker button - reads last AI message */}
          <button
            onClick={handleSpeakLast}
            className={`p-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full ${
              isSpeaking ? 'text-indigo-500' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Volume2 className="w-5 h-5" />
          </button>

          <button className="p-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <Upload className="w-5 h-5" />
          </button>

          <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700 mx-4"></div>

          {/* End call - stops everything */}
          <button
            onClick={() => { stopListening(); stopSpeaking(); }}
            className="p-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-full transition-all border border-red-500/20 hover:border-red-500"
          >
            <PhoneOff className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}