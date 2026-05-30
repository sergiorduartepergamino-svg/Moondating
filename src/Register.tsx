import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, ChevronDown } from 'lucide-react';

export default function Register({ onNext, onLoginClick }: { onNext?: () => void, onLoginClick?: () => void }) {
    const [showPassword, setShowPassword] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const years = Array.from({ length: 2008 - 1960 + 1 }, (_, i) => 2008 - i);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#110A1F] via-[#2A0E38] to-[#C1106A] flex justify-center items-start font-sans overflow-y-auto w-full">
            <div className="w-full max-w-[420px] px-6 py-8 flex flex-col gap-8 text-white relative">

                {/* Top Nav */}
                <div className="flex justify-between items-center w-full">
                    <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <ArrowLeft className="text-[#E8C265] w-5 h-5" />
                    </button>
                    <div className="flex gap-1.5 items-center">
                        <div className="h-1.5 w-6 bg-[#E81E97] rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-[#E8C265]/40 rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-[#E8C265]/40 rounded-full"></div>
                        <div className="h-1.5 w-1.5 bg-[#E8C265]/40 rounded-full"></div>
                    </div>
                </div>

                {/* Header */}
                <div className="flex flex-col gap-1 -mt-2">
                    <h1 
                        className="text-[2.2rem] leading-tight font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] drop-shadow-[0_2px_1px_rgba(0,0,0,0.5)] mb-2"
                        style={{ WebkitTextStroke: '0.5px #A87A1E' }}
                    >
                        Creá tu cuenta
                    </h1>
                    <p className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] font-bold text-sm">Empezamos con lo básico</p>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-5">
                    {/* Username */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[0.65rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] uppercase tracking-widest pl-1">Nombre de usuario</label>
                        <input
                            type="text"
                            placeholder="@usuario"
                            className="w-full bg-[#16161C] border border-[#E8C265]/20 focus:border-[#E8C265] rounded-xl px-4 py-3.5 text-[#E8C265] text-[0.95rem] placeholder:text-[#E8C265]/50 focus:outline-none transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                        />
                    </div>

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
                                placeholder="Mínimo 8 caracteres"
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

                    {/* DOB */}
                    <div className="flex flex-col gap-2 mt-1">
                        <label className="text-[0.65rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] uppercase tracking-widest pl-1">Fecha de nacimiento</label>
                        <div className="flex gap-3">
                            <div className="relative flex-1">
                                <select className="w-full appearance-none bg-[#16161C] border border-[#E8C265]/20 focus:border-[#E8C265] rounded-xl px-4 py-3.5 text-[#E8C265] text-sm focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
                                    {days.map(d => <option key={`day-${d}`} value={d}>{d}</option>)}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-[45%] text-[#E8C265]/60 w-4 h-4 pointer-events-none" />
                            </div>
                            <div className="relative flex-1">
                                <select className="w-full appearance-none bg-[#16161C] border border-[#E8C265]/20 focus:border-[#E8C265] rounded-xl px-4 py-3.5 text-[#E8C265] text-sm focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
                                    {months.map(m => <option key={`mon-${m}`} value={m}>{m}</option>)}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-[45%] text-[#E8C265]/60 w-4 h-4 pointer-events-none" />
                            </div>
                            <div className="relative flex-[1.2]">
                                <select className="w-full appearance-none bg-[#16161C] border border-[#E8C265]/20 focus:border-[#E8C265] rounded-xl px-4 py-3.5 text-[#E8C265] text-sm focus:outline-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
                                    {years.map(y => <option key={`yr-${y}`} value={y}>{y}</option>)}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-[45%] text-[#E8C265]/60 w-4 h-4 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terms and Submit */}
                <div className="flex flex-col gap-6 mt-4 pb-12">
                    <div
                        className="flex gap-3 items-start cursor-pointer group"
                        onClick={() => setAgreed(!agreed)}
                    >
                        <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-[6px] border ${agreed ? 'bg-[#E8C265] border-[#E8C265]' : 'border-[#E8C265]/50 group-hover:border-[#E8C265]'} flex items-center justify-center transition-all`}>
                            {agreed && (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </div>
                        <p className="text-[0.8rem] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] font-bold leading-snug">
                            Acepto los Términos y Condiciones y confirmo que soy mayor de 18 años
                        </p>
                    </div>

                    <button
                        onClick={onNext}
                        className="w-full bg-gradient-to-r from-[#D700FF] to-[#A100FF] hover:opacity-90 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] font-black text-[1.05rem] py-4 rounded-xl shadow-[0_4px_15px_rgba(215,0,255,0.4)] active:translate-y-1 transition-all border border-[#F4D068]/30"
                        style={{ WebkitTextStroke: '0.5px #A87A1E' }}
                    >
                        Continuar
                    </button>

                    <button 
                        onClick={onLoginClick}
                        className="w-full bg-gradient-to-r from-[#D700FF] to-[#A100FF] hover:opacity-90 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] font-black text-[1.05rem] py-4 rounded-xl shadow-[0_4px_15px_rgba(215,0,255,0.4)] active:translate-y-1 transition-all border border-[#F4D068]/30"
                        style={{ WebkitTextStroke: '0.5px #A87A1E' }}
                    >
                        Ya tengo cuenta
                    </button>
                </div>

            </div>
        </div>
    );
}
