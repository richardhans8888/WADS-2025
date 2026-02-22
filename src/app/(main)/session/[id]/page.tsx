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
    <div className="h-[calc(100vh-64px)] bg-gradient-to-b from-[#0C0F17] to-[#0F1115] text-white overflow-hidden flex flex-col">
      
      {/* Header */}
      <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between bg-[#121724]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link href="/tutors/sarah-jenkins">
            <Button variant="ghost" size="sm" className="bg-white/5 hover:bg-white/10 text-gray-300">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-900/30">
            <GraduationCapIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-base leading-tight">Advanced Calculus Group Study</h1>
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
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
            <div className="w-8 h-8 rounded-full border-2 border-[#121724] bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-[10px] font-bold">JD</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#121724] bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[10px] font-bold">AM</div>
            <div className="w-8 h-8 rounded-full border-2 border-[#121724] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold">+2</div>
          </div>
          <Button variant="ghost" size="sm" className="bg-white/5 hover:bg-white/10 text-gray-300">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-12 overflow-hidden p-4 gap-4">
        
        {/* Left Column: Main Video (Tutor) */}
        <div className="col-span-8 relative bg-[#121724] rounded-2xl overflow-hidden border border-white/10 group shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(29,78,216,0.15),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.12),transparent_60%)] pointer-events-none" />
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center select-none">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-900/30">
                <span className="text-3xl font-bold">TS</span>
              </div>
              <p className="text-gray-400">Tutor Camera Feed</p>
            </div>
          </div>
          <div className="absolute top-6 left-6 right-[36%] bottom-24 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
            <div className="text-white/90 text-2xl opacity-80 tracking-wide">
              <div>f(x) = sin(x²)</div>
              <div className="mt-4">Chain Rule:</div>
              <div>dy/dx = cos(x²) • 2x</div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2 border border-white/10">
              <span className="font-bold">Tutor Sarah</span>
              <span className="text-[10px] bg-blue-600/90 px-1.5 py-0.5 rounded text-white font-bold">HOST</span>
              <div className="flex items-center gap-0.5 ml-2">
                <span className="w-1 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="w-1 h-2 bg-emerald-500 rounded-full animate-pulse delay-75"></span>
                <span className="w-1 h-4 bg-emerald-500 rounded-full animate-pulse delay-150"></span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xl px-3 py-2 rounded-full border border-white/10 shadow-2xl">
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
              <ControlBtn icon={Monitor} highlight />
              <ControlBtn icon={Hand} />
              <ControlBtn icon={PenTool} />
              <div className="w-px h-6 bg-white/15 mx-1.5"></div>
              <button className="px-4 h-11 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center text-white font-semibold">
                <PhoneOff className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Column: Participants */}
        <div className="col-span-4 grid grid-rows-2 gap-4">
          <div className="bg-[#121724] rounded-2xl overflow-hidden border border-white/10 relative group shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                <span className="text-xl font-bold">AM</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10">
              Alex M.
            </div>
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-1.5 rounded-lg border border-white/10">
              <MicOff className="w-4 h-4 text-red-400" />
            </div>
          </div>
          <div className="bg-[#121724] rounded-2xl overflow-hidden border border-white/10 relative group shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <span className="text-xl font-bold">JD</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10">
              Jessica D.
            </div>
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-1.5 rounded-lg border border-white/10">
              <Mic className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar (Chat/Transcript) */}
        <div className="col-span-12 lg:col-span-4 bg-[#121724] rounded-2xl border border-white/10 flex flex-col overflow-hidden">
          <div className="p-2">
            <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-xl">
            <button 
              onClick={() => setActiveTab('transcript')}
              className={`py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'transcript' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              Notes
            </button>
            <button 
              onClick={() => setActiveTab('chat')}
              className={`py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'chat' 
                  ? 'bg-blue-600 text-white shadow' 
                  : 'text-gray-300 hover:text-gray-100'
              }`}
            >
              Chat
            </button>
          </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {activeTab === 'transcript' && (
              <div className="bg-[#171C26] rounded-xl p-4 border border-blue-500/30 shadow-lg shadow-blue-900/10">
                <div className="flex items-center gap-2 mb-2 text-blue-300 text-xs font-semibold tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Current Topic
                </div>
                <p className="text-sm text-gray-100 leading-relaxed">
                  The Chain Rule: differentiating composite functions.
                </p>
              </div>
            )}

            <div className="space-y-6">
              {transcript.map((msg) => (
                <div key={msg.id} className="group">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className={`text-sm font-semibold ${msg.speaker === "Tutor Sarah" ? "text-blue-300" : "text-gray-300"}`}>
                      {msg.speaker}
                    </span>
                    <span className="text-[10px] text-gray-500">{msg.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {msg.message.split(' ').map((word, i) => {
                      if (['sin(u)', 'x^2', 'outer', 'inner'].includes(word.replace(/[,.]/g, ''))) {
                        return <span key={i} className="text-blue-300 bg-blue-500/10 rounded px-1">{word} </span>;
                      }
                      return word + ' ';
                    })}
                  </p>
                </div>
              ))}
              
              <div className="flex items-center gap-2 text-xs text-gray-500 italic">
                <MoreHorizontal className="w-4 h-4" />
                Sarah is speaking...
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/10 bg-[#121724]">
            <div className="relative">
              <input 
                type="text" 
                placeholder={activeTab === 'transcript' ? "Ask AI a question..." : "Type a message..."}
                className="w-full bg-[#171C26] border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg bg-blue-600 hover:bg-blue-500 flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
            {activeTab === 'transcript' && (
              <button className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-200 mt-3 mx-auto transition-colors">
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
      className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
        highlight 
          ? 'bg-white/10 text-white hover:bg-white/20' 
          : active 
            ? 'bg-blue-600 text-white ring-2 ring-blue-400/40' 
            : 'bg-white/10 text-gray-200 hover:bg-white/20'
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
