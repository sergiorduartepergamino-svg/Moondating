import React from 'react';
import { User, MessageCircle, Heart, Layers } from 'lucide-react';

export default function BottomNav({ active, onNavigate }: { active: string, onNavigate: (screen: string) => void }) {
    return (
        <div className="fixed bottom-0 w-full max-w-[420px] flex justify-around items-center h-[80px] bg-[#110A1F]/95 backdrop-blur-xl border-t border-[#E8C265]/30 z-[100] px-4 rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
            <button onClick={() => onNavigate('profile')} className={`p-3 relative group flex flex-col items-center transition-all ${active === 'profile' ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}>
                <User strokeWidth={active === 'profile' ? 2.5 : 2} className="w-7 h-7 text-[#E8C265] drop-shadow-[0_0_5px_rgba(232,194,101,0.5)]" />
                {active === 'profile' && <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#E8C265] shadow-[0_0_5px_#E8C265]" />}
            </button>
            <button onClick={() => onNavigate('chat')} className={`p-3 relative group flex flex-col items-center transition-all ${active === 'chat' ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}>
                <MessageCircle strokeWidth={active === 'chat' ? 2.5 : 2} className="w-7 h-7 text-[#E8C265] drop-shadow-[0_0_5px_rgba(232,194,101,0.5)]" />
                {active === 'chat' && <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#E8C265] shadow-[0_0_5px_#E8C265]" />}
            </button>
            <button onClick={() => onNavigate('likes')} className={`p-3 relative group flex flex-col items-center transition-all ${active === 'likes' ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}>
                <Heart strokeWidth={active === 'likes' ? 2.5 : 2} className="w-7 h-7 text-[#E8C265] drop-shadow-[0_0_5px_rgba(232,194,101,0.5)]" />
                {active === 'likes' && <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#E8C265] shadow-[0_0_5px_#E8C265]" />}
            </button>
            <button onClick={() => onNavigate('matches')} className={`p-3 relative group flex flex-col items-center transition-all ${active === 'matches' ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}>
                <Layers strokeWidth={active === 'matches' ? 2.5 : 2} className="w-7 h-7 text-[#E8C265] drop-shadow-[0_0_5px_rgba(232,194,101,0.5)]" />
                {active === 'matches' && <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[#E8C265] shadow-[0_0_5px_#E8C265]" />}
            </button>
        </div>
    );
}
