"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Mic, 
  Video, 
  Monitor, 
  Hand, 
  PenTool, 
  PhoneOff, 
  Settings, 
  Users, 
  MessageSquare, 
  FileText, 
  Send,
  Sparkles,
  MoreHorizontal,
  MicOff,
  VideoOff,
  ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function SessionPage() {
  const [activeTab, setActiveTab] = useState<'transcript' | 'chat'>('transcript');
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [timer, setTimer] = useState("00:45:12");

  // Mock data for transcript
  const transcript = [
    {
      id: 1,
      speaker: "Tutor Sarah",
      message: "Let's start by defining the outer function and the inner function.",
      timestamp: "10:42 AM",
      isAi: false
    },
    {
      id: 2,
      speaker: "Alex M.",
      message: "So if f(x) is sin(x^2), the outer is sin?",
      timestamp: "10:43 AM",
      isAi: false
    },
    {
      id: 3,
      speaker: "Tutor Sarah",
      message: "Exactly. sin(u) is the outer, and x^2 is the inner.",
      timestamp: "10:43 AM",
      isAi: false
    }
  ];

  return (
    <div className="h-[calc(100vh-64px)] bg-[#0F1115] text-white overflow-hidden flex flex-col">
      
      {/* Header */}
      <header className="h-16 border-b border-gray-800 px-6 flex items-center justify-between bg-[#151921]">
        <div className="flex items-center gap-4">
          <Link href="/tutors/sarah-jenkins">
            <Button variant="ghost" size="sm" className="bg-[#1E2330] hover:bg-[#252b3b] text-gray-400">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <GraduationCapIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight">Advanced Calculus Group Study</h1>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-500 font-bold">Live</span>
              <span>•</span>
              <span className="font-mono">{timer}</span>
              <span>•</span>
              <span>ID: 892-110</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#151921] bg-rose-500 flex items-center justify-center text-xs font-bold">JD</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#151921] bg-emerald-500 flex items-center justify-center text-xs font-bold">AM</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#151921] bg-blue-500 flex items-center justify-center text-xs font-bold">+2</div>
          </div>
          <Button variant="ghost" size="sm" className="bg-[#1E2330] hover:bg-[#252b3b] text-gray-400">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden p-4 gap-4">
        
        {/* Left Column: Main Video (Tutor) */}
        <div className="flex-[2] relative bg-[#151921] rounded-2xl overflow-hidden border border-gray-800 group">
          {/* Placeholder for Tutor Video */}
          <div className="w-full h-full bg-[#1A202C] flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold">TS</span>
              </div>
              <p className="text-gray-400 font-medium">Tutor Camera Feed</p>
            </div>
          </div>
          
          {/* Whiteboard Overlay Mockup */}
          <div className="absolute top-8 left-8 bottom-24 right-1/3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <div className="font-handwriting text-white/90 text-2xl opacity-80">
              <p>f(x) = sin(x²)</p>
              <p className="mt-4">Chain Rule:</p>
              <p>dy/dx = cos(x²) • 2x</p>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="font-bold">Tutor Sarah</span>
              <span className="text-[10px] bg-blue-600 px-1.5 py-0.5 rounded text-white font-bold">HOST</span>
              <div className="flex items-center gap-0.5 ml-2">
                <span className="w-1 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="w-1 h-2 bg-emerald-500 rounded-full animate-pulse delay-75"></span>
                <span className="w-1 h-4 bg-emerald-500 rounded-full animate-pulse delay-150"></span>
              </div>
            </div>
          </div>

          {/* Controls Overlay */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/80 backdrop-blur-xl p-2 rounded-2xl border border-white/10 shadow-2xl transition-transform duration-300 translate-y-20 group-hover:translate-y-0">
            <ControlBtn 
              icon={isMicOn ? Mic : MicOff} 
              active={isMicOn} 
              onClick={() => setIsMicOn(!isMicOn)} 
            />
            <ControlBtn 
              icon={isVideoOn ? Video : VideoOff} 
              active={isVideoOn} 
              onClick={() => setIsVideoOn(!isVideoOn)} 
            />
            <ControlBtn icon={Monitor} active={true} highlight />
            <ControlBtn icon={Hand} />
            <ControlBtn icon={PenTool} />
            <div className="w-px h-8 bg-white/20 mx-1"></div>
            <button className="w-12 h-12 rounded-xl bg-red-500 hover:bg-red-600 flex items-center justify-center text-white transition-colors">
              <PhoneOff className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Middle Column: Participants Stack */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Participant 1 */}
          <div className="flex-1 bg-[#151921] rounded-2xl overflow-hidden border border-gray-800 relative">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop" 
              alt="Alex M." 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium">
              Alex M.
            </div>
            <div className="absolute bottom-4 right-4 bg-red-500/80 p-1.5 rounded-full">
              <MicOff className="w-3 h-3 text-white" />
            </div>
          </div>
          
          {/* Participant 2 */}
          <div className="flex-1 bg-[#151921] rounded-2xl overflow-hidden border border-gray-800 relative">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop" 
              alt="Jamie L." 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="text-4xl">🤔</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium">
              Jamie L.
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar (Chat/Transcript) */}
        <div className="w-80 bg-[#151921] rounded-2xl border border-gray-800 flex flex-col overflow-hidden">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-800">
            <button 
              onClick={() => setActiveTab('transcript')}
              className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'transcript' 
                  ? 'border-blue-500 text-white' 
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              AI Transcript
            </button>
            <button 
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'chat' 
                  ? 'border-blue-500 text-white' 
                  : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              Group Chat
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Current Topic Card */}
            {activeTab === 'transcript' && (
              <div className="bg-[#1E2330] rounded-xl p-4 border border-blue-500/30 shadow-lg shadow-blue-900/10">
                <div className="flex items-center gap-2 mb-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Current Topic
                </div>
                <p className="text-sm font-medium text-white leading-relaxed">
                  The Chain Rule: differentiating composite functions.
                </p>
              </div>
            )}

            {/* Messages */}
            <div className="space-y-6">
              {transcript.map((msg) => (
                <div key={msg.id} className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className={`text-sm font-bold ${msg.speaker === "Tutor Sarah" ? "text-blue-400" : "text-gray-300"}`}>
                      {msg.speaker}
                    </span>
                    <span className="text-[10px] text-gray-600">{msg.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    {msg.message.split(' ').map((word, i) => {
                      if (['sin(u)', 'x^2', 'outer', 'inner'].includes(word.replace(/[,.]/g, ''))) {
                        return <span key={i} className="text-blue-300 bg-blue-500/10 rounded px-1">{word} </span>;
                      }
                      return word + ' ';
                    })}
                  </p>
                </div>
              ))}
              
              {/* Live Indicator */}
              <div className="flex items-center gap-2 text-xs text-gray-500 italic animate-pulse">
                <MoreHorizontal className="w-4 h-4" />
                Sarah is speaking...
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-800 bg-[#151921]">
            <div className="relative">
              <input 
                type="text" 
                placeholder={activeTab === 'transcript' ? "Ask AI a question..." : "Type a message..."}
                className="w-full bg-[#1E2330] border border-gray-700 rounded-xl py-3 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
            {activeTab === 'transcript' && (
              <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 mt-3 mx-auto transition-colors">
                <FileText className="w-3 h-3" />
                Export Transcript
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// Helper Components
function ControlBtn({ 
  icon: Icon, 
  active = false, 
  highlight = false,
  onClick 
}: { 
  icon: any, 
  active?: boolean, 
  highlight?: boolean,
  onClick?: () => void 
}) {
  return (
    <button 
      onClick={onClick}
      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
        highlight 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-500' 
          : active 
            ? 'bg-[#1E2330] text-white hover:bg-[#2A3040]' 
            : 'bg-red-500/10 text-red-500 hover:bg-red-500/20'
      }`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
