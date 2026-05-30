import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function Login({ onBack, onLogin }: { onBack?: () => void, onLogin?: () => void }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#110A1F] via-[#2A0E38] to-[#C1106A] flex justify-center items-start font-sans overflow-y-auto w-full">
            <div className="w-full max-w-[420px] px-6 py-8 flex flex-col gap-8 text-white relative">
                
                {/* Top Nav */}
                <div className="flex justify-between items-center w-full">
                    {onBack && (
                        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <ArrowLeft className="text-[#E8C265] w-5 h-5" />
                        </button>
                    )}
                </div>

                {/* Header */}
                <div className="flex flex-col gap-1 -mt-2">
                    <h1 
                        className="text-[2.2rem] leading-tight font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] drop-shadow-[0_2px_1px_rgba(0,0,0,0.5)] mb-2"
                        style={{ WebkitTextStroke: '0.5px #A87A1E' }}
                    >
                        Iniciá sesión
                    </h1>
                    <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] font-bold text-sm">Bienvenido de nuevo</p>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-5 mt-4">
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[0.65rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] uppercase tracking-widest pl-1">Correo electrónico</label>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="w-full bg-[#16161C] border border-[#E8C265]/20 focus:border-[#E8C265] rounded-xl px-4 py-3.5 text-[#E8C265] text-[0.95rem] placeholder:text-[#E8C265]/50 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[0.65rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] uppercase tracking-widest pl-1">Contraseña</label>
                        <div className="relative flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Tu contraseña"
                                className="w-full bg-[#16161C] border border-[#E8C265]/20 focus:border-[#E8C265] rounded-xl px-4 py-3.5 pr-12 text-[#E8C265] text-[0.95rem] placeholder:text-[#E8C265]/50 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 text-[#E8C265]/70 hover:text-[#E8C265] transition-colors"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col gap-6 mt-8 pb-12">
                    <button
                        onClick={onLogin}
                        className="w-full bg-gradient-to-r from-[#D700FF] to-[#A100FF] hover:opacity-90 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] font-black text-[1.05rem] py-4 rounded-xl shadow-[0_4px_15px_rgba(215,0,255,0.4)] active:translate-y-1 transition-all border border-[#F4D068]/30"
                        style={{ WebkitTextStroke: '0.5px #A87A1E' }}
                    >
                        Ingresar
                    </button>
                </div>

            </div>
        </div>
    );
}
