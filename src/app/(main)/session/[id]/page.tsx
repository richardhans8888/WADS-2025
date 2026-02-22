"use client";

import { useState } from 'react';
import { 
  Mic, 
  MicOff,
  Smile,
  Volume2,
  PhoneOff,
  MessageSquare,
  Monitor
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function SessionPage() {
  const searchParams = useSearchParams();
  const initialPanel = searchParams.get('panel');
  const [isMicOn, setIsMicOn] = useState(true);
  const [volume, setVolume] = useState(70);
  const [activePanel, setActivePanel] = useState<'none' | 'chat' | 'whiteboard'>(() => {
    if (initialPanel === 'chat') return 'chat';
    if (initialPanel === 'whiteboard') return 'whiteboard';
    return 'none';
  });
  const participants = [
    { id: 1, name: "You", avatar: "You", angle: -140 },
    { id: 2, name: "Sarah J.", avatar: "SJ", center: true },
    { id: 3, name: "Alex M.", avatar: "AM", angle: -20 },
    { id: 4, name: "Kenji S.", avatar: "KS", angle: 40 },
    { id: 5, name: "Elena R.", avatar: "ER", angle: 160 },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#06090f] text-white overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[55vw] h-[55vw] rounded-full bg-blue-900/15 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[45vw] h-[45vw] rounded-full bg-indigo-900/20 blur-[120px]" />
      </div>

      <div className="relative h-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6">
        <div className="relative w-[700px] h-[700px] max-w-full max-h-[70vh]">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[90px] rounded-full border border-white/10" />
          <div className="absolute inset-[180px] rounded-full border border-white/10" />

          {participants.map((p) => {
            if (p.center) {
              return (
                <div key={p.id} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="w-56 h-56 rounded-full bg-blue-600 shadow-lg shadow-blue-900/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-lg bg-white/20 border border-white/20" />
                  </div>
                  <div className="mt-2 text-sm">
                    <div className="font-semibold">Sarah J.</div>
                    <div className="text-emerald-400 text-[11px] font-bold tracking-wider">SPEAKING</div>
                  </div>
                </div>
              );
            }
            const radius = 260;
            const angleRad = (p.angle! * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;
            return (
              <div
                key={p.id}
                className="absolute"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shadow-md bg-[#0D1420] flex items-center justify-center">
                  <span className="text-xs font-bold">{p.avatar}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="fixed bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-3 bg-[#0B1220] px-4 py-3 rounded-full border border-white/10 shadow-xl">
            <button 
              onClick={() => setIsMicOn(!isMicOn)} 
              className={`w-12 h-12 rounded-full flex items-center justify-center ${isMicOn ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-300'}`}
            >
              {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>
            <button className="w-10 h-10 rounded-full bg-white/10 text-gray-300 flex items-center justify-center">
              <Smile className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10">
              <Volume2 className="w-4 h-4 text-gray-300" />
              <input 
                type="range" 
                min={0} 
                max={100} 
                value={volume} 
                onChange={(e) => setVolume(Number(e.target.value))} 
                className="w-32 accent-blue-500"
              />
            </div>
            <div className="w-px h-6 bg-white/15 mx-1.5"></div>
            <button className="px-4 h-12 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center text-white font-semibold">
              <PhoneOff className="w-5 h-5 mr-1" />
              Leave
            </button>
          </div>
        </div>

        <div className="fixed bottom-10 right-10 w-[340px] bg-[#0B1220] rounded-2xl border border-white/10 shadow-xl">
          <div className="p-4 border-b border-white/10 flex items-center justify-between">
            <div className="text-sm font-semibold">Personal Notes</div>
            <button className="text-xs text-gray-400">Expand</button>
          </div>
          <div className="p-4 text-sm text-gray-300 space-y-3">
            <p>Wait, did Sarah say the deadline for the Quantum Mechanics paper was extended to Friday?</p>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-500">Type a new note...</span>
            </div>
          </div>
        </div>

        <div className="fixed top-20 right-10 flex items-center gap-2">
          <button
            onClick={() => setActivePanel(activePanel === 'chat' ? 'none' : 'chat')}
            className={`px-3 h-10 rounded-full border ${activePanel === 'chat' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-[#0B1220] border-white/10 text-gray-200'}`}
          >
            <div className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Chat</div>
          </button>
          <button
            onClick={() => setActivePanel(activePanel === 'whiteboard' ? 'none' : 'whiteboard')}
            className={`px-3 h-10 rounded-full border ${activePanel === 'whiteboard' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-[#0B1220] border-white/10 text-gray-200'}`}
          >
            <div className="flex items-center gap-2"><Monitor className="w-4 h-4" /> Whiteboard</div>
          </button>
        </div>

        {activePanel !== 'none' && (
          <aside className="fixed top-20 right-10 w-[360px] h-[calc(100vh-120px)] bg-[#0B1220] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {activePanel === 'chat' ? <MessageSquare className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                <span className="text-sm font-semibold">{activePanel === 'chat' ? 'Group Chat' : 'Whiteboard'}</span>
              </div>
              <button
                onClick={() => setActivePanel('none')}
                className="text-xs text-gray-400 hover:text-gray-200"
              >
                Close
              </button>
            </div>
            {activePanel === 'chat' ? (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <div className="text-xs text-gray-400">Today</div>
                  <div className="space-y-3">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-xs text-blue-300 font-semibold">Sarah</div>
                      <div className="text-sm text-gray-200">We’ll cover the chain rule examples next.</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-xs text-emerald-300 font-semibold">Alex</div>
                      <div className="text-sm text-gray-200">Can we go over sin(x^2) again?</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-white/10">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="w-full bg-[#0D1420] border border-white/10 rounded-xl py-3 pl-4 pr-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-500 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 relative">
                <div className="absolute inset-0 p-4">
                  <div className="w-full h-full rounded-xl border border-gray-800 bg-[linear-gradient(#1b2438_1px,transparent_1px),linear-gradient(90deg,#1b2438_1px,transparent_1px)] bg-[size:24px_24px]" />
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                  <div className="px-3 py-1.5 rounded-lg bg-white/10 text-xs text-gray-300">Board Tools</div>
                  <div className="w-px h-6 bg-white/10" />
                  <button className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm">Share</button>
                </div>
              </div>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}
