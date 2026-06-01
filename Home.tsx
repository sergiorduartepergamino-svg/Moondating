import React from 'react';
import { motion } from 'motion/react';

export default function Home({ onLogin, onRegister }: { onLogin: () => void, onRegister: () => void }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#E20B62] via-[#9B127E] to-[#401996] flex flex-col justify-between items-center font-sans overflow-hidden w-full relative px-6 py-12">
            
            {/* Top spacing */}
            <div className="flex-1"></div>

            {/* Logo area */}
            <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.5 }}
                className="flex flex-col items-center justify-center flex-none gap-8"
            >
                <h1 
                    className="text-[3.2rem] sm:text-[3.5rem] text-center leading-tight font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] drop-shadow-[0_4px_3px_rgba(0,0,0,0.6)]"
                    style={{ WebkitTextStroke: '1.5px #A87A1E' }}
                >
                    MOONDATING
                </h1>

                <div className="relative w-40 h-40 shrink-0 rounded-full border-[4px] border-[#E8C265] shadow-[0_0_30px_rgba(232,194,101,0.6)] flex items-center justify-center bg-gradient-to-br from-[#E20B62] to-[#9B127E] overflow-hidden">
                    <svg viewBox="0 0 24 24" className="w-[110px] h-[110px] drop-shadow-lg" fill="url(#homeHeartGradient)">
                        <defs>
                            <radialGradient id="homeHeartGradient" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="#FF6BBF" />
                                <stop offset="100%" stopColor="#9B0058" />
                            </radialGradient>
                        </defs>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="w-12 h-12 absolute top-[31%] left-[26%] drop-shadow-md" fill="url(#homeMoonColor)">
                        <defs>
                            <linearGradient id="homeMoonColor" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#FFFDF0" />
                                <stop offset="100%" stopColor="#D4AF37" />
                            </linearGradient>
                        </defs>
                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                    </svg>
                </div>
            </motion.div>

            {/* Middle spacing */}
            <div className="flex-1"></div>

            {/* Bottom Buttons */}
            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full max-w-[420px] flex flex-col gap-5 pb-8"
            >
                <button
                    onClick={onLogin}
                    className="w-full bg-gradient-to-b from-[#FFF8D6] via-[#F4D068] to-[#996515] hover:brightness-110 py-4 rounded-full font-black text-xl text-black shadow-[0_4px_15px_rgba(0,0,0,0.5)] border-t-[1.5px] border-[#FFFDF0]/80 tracking-wide active:translate-y-1 transition-all"
                >
                    INICIAR SESIÓN
                </button>
                
                <button
                    onClick={onRegister}
                    className="w-full bg-gradient-to-b from-[#FFF8D6] via-[#F4D068] to-[#996515] hover:brightness-110 py-4 rounded-full font-black text-xl text-black shadow-[0_4px_15px_rgba(0,0,0,0.5)] border-t-[1.5px] border-[#FFFDF0]/80 tracking-wide active:translate-y-1 transition-all"
                >
                    REGÍSTRATE
                </button>
            </motion.div>
        </div>
    );
}
