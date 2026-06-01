import React, { useState, useRef } from 'react';
import { ArrowLeft, Camera, Edit2, Settings, ChevronDown } from 'lucide-react';

const AVAILABLE_INTERESTS = [
  'Viajes', 'Navegación', 'Música', 'Arte', 'Cine', 'Lectura', 'Fotografía', 
  'Deportes', 'Fitness', 'Gastronomía', 'Bailar', 'Mascotas', 'Naturaleza', 
  'Videojuegos', 'Teatro', 'Moda', 'Tecnología', 'Yoga', 'Meditación', 'Historia',
  'Astrología', 'Tatuajes', 'Festivales', 'Vino'
];

interface ProfileProps {
    onBack?: () => void;
    onSave?: () => void;
}

const DetailInput = ({ label, value, onChange }: any) => (
    <div className="flex flex-col gap-1">
        <label className="text-[0.75rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] pl-1 uppercase tracking-wider">
            {label}
        </label>
        <input 
            type="text" 
            value={value} 
            onChange={e => onChange(e.target.value)} 
            className="w-full bg-[#110A1F]/60 border-[1.5px] border-[#E8C265]/30 focus:border-[#E8C265] rounded-xl px-4 py-3 text-[#FFFDF0] text-sm font-medium focus:outline-none transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
        />
    </div>
);

const DetailSelect = ({ label, value, options, onChange }: any) => (
    <div className="flex flex-col gap-1">
        <label className="text-[0.75rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] pl-1 uppercase tracking-wider">
            {label}
        </label>
        <div className="relative">
            <select 
                value={value} 
                onChange={e => onChange(e.target.value)} 
                className="w-full appearance-none bg-[#110A1F]/60 border-[1.5px] border-[#E8C265]/30 focus:border-[#E8C265] rounded-xl px-4 py-3 text-[#FFFDF0] text-sm font-medium focus:outline-none transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
            >
                <option value="" disabled className="bg-[#110A1F] text-white/50">Seleccionar...</option>
                {options.map((opt: string) => <option key={opt} value={opt} className="bg-[#110A1F] text-[#FFFDF0]">{opt}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-[45%] text-[#E8C265]/60 w-4 h-4 pointer-events-none" />
        </div>
    </div>
);

export default function Profile({ onBack, onSave }: ProfileProps) {
  const [mode, setMode] = useState<'view' | 'edit' | 'details'>('view');
  
  const [photos, setPhotos] = useState<string[]>([
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop'
  ]);
  const [name, setName] = useState('Valeria, 24');
  const [about, setAbout] = useState('Amante del diseño, de los viajes espontáneos y de las buenas conversaciones. Me encanta perderme por la ciudad, encontrar cafeterías ocultas y tomar fotos analógicas.');
  const [interests, setInterests] = useState<string[]>(['Viajes', 'Navegación', 'Música', 'Arte', 'Fotografía']);
  
  const [details, setDetails] = useState({
      edad: '24',
      altura: '168 cm',
      ubicacion: 'Buenos Aires',
      fumas: 'No',
      bebes: 'Socialmente',
      estadoCivil: 'Soltero/a',
      hijos: 'No tengo',
      profesion: 'Diseñadora UX',
      aquiPara: 'Relación',
      educacion: 'Universidad',
      religion: 'Agnóstico/a',
      personalidad: 'Extrovertida',
      nacionalidad: 'Argentina',
      etnicidad: 'Latina',
      tipoCuerpo: 'Atlético'
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setPhotos(prev => [...prev, ...newPhotos]);
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const canSave = photos.length >= 3 || mode !== 'edit';

  if (mode === 'details') {
      return (
         <div className="min-h-screen bg-gradient-to-b from-[#E20B62] via-[#9B127E] to-[#401996] flex justify-center items-start font-sans overflow-y-auto w-full relative">
            <div className="w-full flex justify-between items-center px-6 py-6 absolute top-0 z-10 bg-[#E20B62]/80 backdrop-blur-md border-b border-[#E8C265]/20 shadow-lg">
                <button onClick={() => setMode('edit')} className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <ArrowLeft className="text-[#E8C265] w-5 h-5" />
                </button>
                <h2 className="text-[1.3rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                    Detalles
                </h2>
                <div className="w-10"></div>
            </div>
            
            <div className="w-full max-w-[420px] px-6 py-10 pt-28 pb-32 flex flex-col gap-5">
                
                <div className="grid grid-cols-2 gap-4">
                    <DetailInput label="Edad" value={details.edad} onChange={(v:any) => setDetails({...details, edad: v})} />
                    <DetailInput label="Altura" value={details.altura} onChange={(v:any) => setDetails({...details, altura: v})} />
                </div>
                <DetailInput label="Ubicación" value={details.ubicacion} onChange={(v:any) => setDetails({...details, ubicacion: v})} />
                
                <div className="grid grid-cols-2 gap-4">
                    <DetailSelect label="Fumas" value={details.fumas} options={['Sí', 'No', 'Ocasionalmente']} onChange={(v:any) => setDetails({...details, fumas: v})} />
                    <DetailSelect label="Bebes" value={details.bebes} options={['Sí', 'No', 'Socialmente']} onChange={(v:any) => setDetails({...details, bebes: v})} />
                </div>
                
                <DetailSelect label="Estado Civil" value={details.estadoCivil} options={['Soltero/a', 'Divorciado/a', 'Viudo/a', 'Complicado']} onChange={(v:any) => setDetails({...details, estadoCivil: v})} />
                <DetailSelect label="Hijos" value={details.hijos} options={['Tengo', 'No tengo', 'Quiero tener', 'No quiero']} onChange={(v:any) => setDetails({...details, hijos: v})} />
                <DetailInput label="Profesión" value={details.profesion} onChange={(v:any) => setDetails({...details, profesion: v})} />
                <DetailSelect label="Aquí para" value={details.aquiPara} options={['Amistad', 'Relación', 'Citas', 'Networking', 'Aún no lo sé']} onChange={(v:any) => setDetails({...details, aquiPara: v})} />
                <DetailSelect label="Educación" value={details.educacion} options={['Secundaria', 'Universidad', 'Postgrado', 'Autodidacta']} onChange={(v:any) => setDetails({...details, educacion: v})} />
                <DetailInput label="Religión" value={details.religion} onChange={(v:any) => setDetails({...details, religion: v})} />
                <DetailInput label="Personalidad" value={details.personalidad} onChange={(v:any) => setDetails({...details, personalidad: v})} />
                <DetailInput label="Nacionalidad" value={details.nacionalidad} onChange={(v:any) => setDetails({...details, nacionalidad: v})} />
                <DetailInput label="Etnicidad" value={details.etnicidad} onChange={(v:any) => setDetails({...details, etnicidad: v})} />
                <DetailSelect label="Tipo de cuerpo" value={details.tipoCuerpo} options={['Delgado', 'Atlético', 'Curvy', 'Promedio', 'Fuerte']} onChange={(v:any) => setDetails({...details, tipoCuerpo: v})} />
                
                <button 
                  onClick={() => setMode('edit')}
                  className="w-full mt-6 bg-gradient-to-b from-[#FFF8D6] via-[#F4D068] to-[#996515] py-4 rounded-full font-black text-[1.15rem] text-black shadow-[0_4px_10px_rgba(0,0,0,0.4)] border-t-[1.5px] border-[#FFFDF0]/80 tracking-wide active:translate-y-1 active:shadow-[0_2px_5px_rgba(0,0,0,0.4)] transition-all"
                >
                  GUARDAR DETALLES
                </button>
            </div>
         </div>
      );
  }

  if (mode === 'edit') {
      return (
          <div className="min-h-screen bg-gradient-to-b from-[#E20B62] via-[#9B127E] to-[#401996] flex justify-center items-start font-sans overflow-y-auto w-full relative">
            
            <div className="w-full flex justify-between items-center px-6 py-6 absolute top-0 z-10">
                <button onClick={() => setMode('view')} className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <ArrowLeft className="text-[#E8C265] w-5 h-5" />
                </button>
                <button onClick={() => setMode('details')} className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Settings className="text-[#E8C265] w-5 h-5" />
                </button>
            </div>

            <div className="w-full max-w-[420px] px-6 py-10 pt-24 pb-32 flex flex-col items-center gap-6">

                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] -mt-2">
                  Editar Perfil
                </h2>

                <div 
                  className="flex flex-col items-center gap-3 w-full justify-center mb-2 cursor-pointer group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input 
                    type="file" multiple accept="image/*" className="hidden" 
                    ref={fileInputRef} onChange={handlePhotoUpload} 
                  />
                  <div className="flex items-center gap-4 w-full justify-center pl-8">
                    <div className="relative w-28 h-28 shrink-0 rounded-full border-[3px] border-[#E8C265] shadow-[0_0_15px_rgba(232,194,101,0.5)] flex items-center justify-center bg-gradient-to-br from-[#E20B62] to-[#9B127E] overflow-hidden group-hover:scale-105 transition-transform">
                      {photos.length > 0 ? (
                        <img src={photos[0]} alt="Primary" className="w-full h-full object-cover" />
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" className="w-20 h-20 drop-shadow-lg" fill="url(#heartGradient)">
                            <defs>
                              <radialGradient id="heartGradient" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="#FF6BBF" />
                                <stop offset="100%" stopColor="#9B0058" />
                              </radialGradient>
                            </defs>
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <svg viewBox="0 0 24 24" className="w-8 h-8 absolute top-[32%] left-[26%] drop-shadow-sm" fill="url(#moonColor)">
                            <defs>
                              <linearGradient id="moonColor" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#FFFDF0" />
                                <stop offset="100%" stopColor="#D4AF37" />
                              </linearGradient>
                            </defs>
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                          </svg>
                        </>
                      )}
                    </div>
                    <div className="w-24 leading-tight font-bold text-[1.05rem] text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      {photos.length === 0 ? (
                        <>Sube al menos<br />3 fotos</>
                      ) : (
                        <>{photos.length} fotos<br />subidas</>
                      )}
                    </div>
                  </div>
                  
                  {photos.length > 0 && (
                    <div className="flex gap-2 items-center mt-2 pl-4">
                      {photos.slice(1, 4).map((img, i) => (
                        <div key={i} className="w-12 h-12 shrink-0 rounded-full border-2 border-[#E8C265] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                          <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                      {photos.length > 4 && (
                        <div className="w-12 h-12 shrink-0 rounded-full border-2 border-[#E8C265] flex items-center justify-center bg-black/40 text-[#E8C265] font-bold text-sm shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                          +{photos.length - 4}
                        </div>
                      )}
                      {photos.length < 3 && (
                        <div className="w-12 h-12 shrink-0 rounded-full border-2 border-[#E8C265] flex items-center justify-center bg-[#E20B62]/20 text-[#E8C265] border-dashed shadow-inner">
                          <Camera className="w-5 h-5 opacity-80" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="w-full flex flex-col gap-6 mt-4">
                  
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[1.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      Tu Nombre
                    </h3>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full bg-[#110A1F]/30 border-[1.5px] border-[#E8C265]/50 rounded-full px-5 py-3 text-[#FFFDF0] text-lg font-medium focus:outline-none focus:border-[#E8C265] shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-[1.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      Intereses
                    </h3>
                    <div className="flex flex-wrap gap-2.5 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
                      {AVAILABLE_INTERESTS.map((item) => {
                          const isSelected = interests.includes(item);
                          return (
                              <button 
                                key={item}
                                onClick={() => setInterests(prev => isSelected ? prev.filter(i => i !== item) : [...prev, item])}
                                className={`px-4 py-1.5 rounded-full font-bold text-sm border shadow-[0_2px_5px_rgba(0,0,0,0.3)] transition-all ${isSelected ? 'bg-gradient-to-b from-[#FFF8D6] via-[#F4D068] to-[#B38018] text-black border-[#FFFDF0]/60' : 'bg-black/20 text-[#E8C265] border-[#E8C265]/40 hover:bg-black/40'}`}
                              >
                                {item}
                              </button>
                          )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 w-full">
                    <h3 className="text-[1.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      Sobre ti
                    </h3>
                    <textarea
                      maxLength={500}
                      value={about}
                      onChange={e => setAbout(e.target.value)}
                      placeholder="Cuéntanos un poco sobre ti aquí..."
                      className="w-full bg-[#110A1F]/30 border-[1.5px] border-[#E8C265]/50 rounded-[1.5rem] px-5 py-4 text-[#FFFDF0] text-lg font-medium min-h-[140px] resize-none focus:outline-none focus:border-[#E8C265] leading-relaxed shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
                    />
                    <div className="w-full text-right text-[#E8C265]/90 text-[0.8rem] font-bold font-mono mt-1">
                        {about.length}/500
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setMode('view')}
                  disabled={!canSave}
                  className={`w-full mt-2 bg-gradient-to-b from-[#FFF8D6] via-[#F4D068] to-[#996515] py-4 rounded-full font-black text-xl text-black shadow-[0_4px_10px_rgba(0,0,0,0.4)] border-t-[1.5px] border-[#FFFDF0]/80 tracking-wide transition-all ${canSave ? 'active:translate-y-1 active:shadow-[0_2px_5px_rgba(0,0,0,0.4)]' : 'opacity-60 cursor-not-allowed grayscale-[0.3]'}`}
                >
                  {canSave ? 'GUARDAR PERFIL' : 'SUBE AL MENOS 3 FOTOS'}
                </button>

            </div>
          </div>
      );
  }

  // View Mode
  return (
      <div className="min-h-screen bg-gradient-to-b from-[#E20B62] via-[#9B127E] to-[#401996] flex justify-center items-start font-sans overflow-y-auto w-full relative">
            <div className="w-full flex justify-between items-center px-6 py-6 absolute top-0 z-10">
                <div></div>
                <button onClick={() => setMode('edit')} className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/30 transition-colors shadow-lg backdrop-blur-md">
                    <Edit2 className="text-[#E8C265] w-5 h-5" />
                </button>
            </div>

            <div className="w-full max-w-[420px] px-6 py-10 pt-20 pb-32 flex flex-col items-center gap-6">
                
                <h1
                  className="text-[2rem] font-heading font-black tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#F4D068] to-[#996515] drop-shadow-[0_2px_1px_rgba(0,0,0,0.5)] mb-2"
                  style={{ WebkitTextStroke: '0.5px #A87A1E' }}
                >
                  MOONDATING
                </h1>

                {/* Profile Photo */}
                <div className="w-40 h-40 shrink-0 rounded-full border-[4px] border-[#E8C265] shadow-[0_0_20px_rgba(232,194,101,0.6)] overflow-hidden bg-gradient-to-br from-[#E20B62] to-[#9B127E] flex items-center justify-center relative group">
                    {photos.length > 0 ? (
                        <img src={photos[0]} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                        <div className="text-center font-bold text-[#E8C265]/80 text-sm p-4">No hay foto de perfil</div>
                    )}
                </div>

                <h2 className="text-[2.2rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] text-center leading-tight">
                    {name}
                </h2>

                <div className="w-full flex flex-col gap-6 mt-2">
                    
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[1.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] border-b border-[#E8C265]/30 pb-1">
                            Sobre ti
                        </h3>
                        <p className="text-[#FFFDF0]/90 text-[1.05rem] font-medium leading-relaxed mt-1">
                            {about}
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-[1.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] border-b border-[#E8C265]/30 pb-1">
                            Intereses
                        </h3>
                        <div className="flex flex-wrap gap-2.5 mt-2">
                            {interests.map(item => (
                                <div key={item} className="px-4 py-1.5 rounded-full bg-[#110A1F]/30 backdrop-blur-sm border border-[#E8C265]/40 text-[#E8C265] font-bold text-sm shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <h3 className="text-[1.35rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF0] via-[#E8C265] to-[#B38018] drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] border-b border-[#E8C265]/30 pb-1">
                            Detalles
                        </h3>
                        <div className="grid grid-cols-2 gap-y-4 gap-x-4 mt-2">
                            {Object.entries(details).map(([key, val]) => (
                                <div key={key} className="flex flex-col gap-0.5">
                                    <span className="text-[#E8C265]/70 text-[0.65rem] uppercase tracking-widest font-bold">
                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                    </span>
                                    <span className="text-[#FFFDF0] font-bold text-[0.95rem] drop-shadow-sm leading-tight">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
      </div>
  );
}
