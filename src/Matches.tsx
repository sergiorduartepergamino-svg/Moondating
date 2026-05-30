import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useAnimation, AnimatePresence } from 'motion/react';
import { Heart, X, ArrowLeft } from 'lucide-react';

const MOCK_PROFILES = [
  { id: 1, name: 'Valeria', age: 24, photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop', about: 'Amo los viajes y la fotografía.' },
  { id: 2, name: 'Sofía', age: 26, photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop', about: 'Amante del café y el arte. Siempre buscando nuevas cafeterías en la ciudad.' },
  { id: 3, name: 'Camila', age: 23, photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop', about: 'Buscando con quién compartir aventuras y buenos momentos.' },
  { id: 4, name: 'Isabella', age: 27, photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop', about: 'Música en vivo siempre. Fiestas y buena actitud.' },
  { id: 5, name: 'Martina', age: 25, photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop', about: 'Lectora empedernida.' }
];

function MatchOverlay({ onClose }: { onClose: () => void }) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 z-[100] flex flex-col items-center justify-center pointer-events-auto"
        >
             <h1 
                className="text-[3rem] text-center leading-tight font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] drop-shadow-[0_2px_1px_rgba(0,0,0,0.5)] mb-12"
                style={{ WebkitTextStroke: '1px #A87A1E' }}
             >
                ¡¡TIENES<br/>UN MATCH!!
             </h1>
             
             <div className="relative w-full h-40 flex justify-center items-center">
                 <motion.div
                    initial={{ x: -150, rotate: -30, scale: 0.5 }}
                    animate={{ x: -15, rotate: -10, scale: 1.2 }}
                    transition={{ type: 'spring', bounce: 0.6, duration: 0.8 }}
                    className="absolute"
                 >
                     <Heart className="w-28 h-28 fill-[#E81E97] text-[#E81E97] drop-shadow-[0_0_30px_rgba(232,30,151,0.8)]" />
                 </motion.div>
                 <motion.div
                    initial={{ x: 150, rotate: 30, scale: 0.5 }}
                    animate={{ x: 15, rotate: 10, scale: 1.2 }}
                    transition={{ type: 'spring', bounce: 0.6, duration: 0.8 }}
                    className="absolute"
                 >
                     <Heart className="w-28 h-28 fill-[#E8C265] text-[#E8C265] drop-shadow-[0_0_30px_rgba(232,194,101,0.8)]" />
                 </motion.div>
                 
                 <motion.div 
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute w-20 h-20 rounded-full border-4 border-[#E81E97]"
                 />
                 <motion.div 
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 3, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute w-20 h-20 rounded-full border-4 border-[#E8C265]"
                 />
             </div>
             
             <button 
                onClick={onClose}
                className="mt-20 w-[80%] max-w-[300px] bg-gradient-to-r from-[#D700FF] to-[#A100FF] px-8 py-4 rounded-xl font-black text-[1.1rem] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] border border-[#F4D068]/30 shadow-[0_4px_15px_rgba(215,0,255,0.4)] active:translate-y-1 transition-all"
                style={{ WebkitTextStroke: '0.5px #A87A1E' }}
             >
                SEGUIR EXPLORANDO
             </button>
        </motion.div>
    )
}

function SwipeCard({ profile, onSwipe, active, index }: { profile: any, onSwipe: (dir: 'left' | 'right') => void, active: boolean, index: number }) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacityRight = useTransform(x, [0, 100], [0, 1]); 
  const opacityLeft = useTransform(x, [0, -100], [0, 1]); 
  const controls = useAnimation();

  const handleDragEnd = async (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset > 100 || velocity > 500) {
      await controls.start({ x: 300, opacity: 0, transition: { duration: 0.2 } });
      onSwipe('right');
    } else if (offset < -100 || velocity < -500) {
      await controls.start({ x: -300, opacity: 0, transition: { duration: 0.2 } });
      onSwipe('left');
    } else {
      controls.start({ x: 0, rotate: 0 });
    }
  };

  const isFront = active;

  return (
    <motion.div
      className="absolute w-full h-[65vh] max-h-[550px] rounded-[2rem] bg-black shadow-[0_4px_25px_rgba(0,0,0,0.5)] overflow-hidden will-change-transform border border-white/10"
      style={{ x, rotate, zIndex: 10 - index }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={controls}
      initial={{ scale: 0.95, y: 20 }}
      animate={{ 
          scale: isFront ? 1 : Math.max(0.9, 1 - (index * 0.04)), 
          y: isFront ? 0 : index * 12,
          opacity: 1
      }}
      transition={{ duration: 0.3 }}
    >
      <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover pointer-events-none select-none" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 pt-24 bg-gradient-to-t from-[#110A1F]/90 via-[#2A0E38]/60 to-transparent flex flex-col justify-end text-white pointer-events-none select-none">
         <h2 className="text-[2.2rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-tight">
            {profile.name}, {profile.age}
         </h2>
         <p className="text-[#FFFDF0]/90 mt-2 text-[0.95rem] font-medium drop-shadow-md leading-snug">
            {profile.about}
         </p>
      </div>

      <motion.div style={{ opacity: opacityRight }} className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none z-20">
        <Heart className="w-40 h-40 fill-[#E81E97] text-[#E81E97] drop-shadow-[0_0_40px_rgba(232,30,151,1)]" />
      </motion.div>

      <motion.div style={{ opacity: opacityLeft }} className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none z-20">
        <X className="w-40 h-40 text-red-500 drop-shadow-[0_0_40px_rgba(239,68,68,1)] stroke-[6px]" />
      </motion.div>
    </motion.div>
  );
}

export default function Matches({ onBack }: { onBack?: () => void }) {
  const [profiles, setProfiles] = useState(MOCK_PROFILES);
  const [showMatch, setShowMatch] = useState(false);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
        setShowMatch(true); // Always match for demonstration
    } else {
        setTimeout(() => {
            setProfiles((prev) => prev.slice(1));
        }, 200);
    }
  };

  const closeMatch = () => {
      setShowMatch(false);
      setProfiles((prev) => prev.slice(1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#110A1F] via-[#2A0E38] to-[#C1106A] flex flex-col items-center font-sans overflow-hidden w-full relative">
       
        <div className="w-full flex justify-between items-center px-6 py-8 z-10 shrink-0">
            {onBack && (
                <button onClick={onBack} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <ArrowLeft className="text-[#E8C265] w-5 h-5" />
                </button>
            )}
            
            <h1 
                className="text-[1.8rem] text-center font-heading font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] drop-shadow-[0_2px_1px_rgba(0,0,0,0.5)] mx-auto"
                style={{ WebkitTextStroke: '0.3px #A87A1E' }}
             >
                MOONDATING
            </h1>

            {/* Spacer for alignment */}
            <div className="w-10 h-10 shrink-0" />
        </div>

        <div className="flex-1 w-full max-w-[420px] px-6 relative flex items-center justify-center pb-28">
            {profiles.length === 0 ? (
                <div className="text-center text-[#E8C265]/80 font-bold text-lg mt-20">
                    No hay más perfiles por ahora.
                </div>
            ) : (
                profiles.map((p, index) => (
                    <SwipeCard 
                        key={p.id} 
                        profile={p} 
                        index={index}
                        active={index === 0} 
                        onSwipe={handleSwipe} 
                    />
                ))
            )}
        </div>

        <AnimatePresence>
            {showMatch && <MatchOverlay onClose={closeMatch} />}
        </AnimatePresence>
    </div>
  );
}
