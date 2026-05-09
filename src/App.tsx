import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wine, 
  Star, 
  MessageSquare, 
  MapPin, 
  Instagram, 
  Facebook, 
  Zap, 
  ChevronRight,
  ShoppingBag,
  Award
} from 'lucide-react';

// --- DATA ---
const PRODUCTOS = [
  { id: 1, name: "Whisky Escocés Single Malt", desc: "Envejecido 18 años en barricas de roble.", price: "$120", category: "Elite" },
  { id: 2, name: "Rum Cubano Añejo", desc: "El alma de la coctelería caribeña.", price: "$45", category: "Premium" },
  { id: 3, name: "Vino Tinto Gran Reserva", desc: "Cuerpo robusto y notas de frutos rojos.", price: "$85", category: "Elite" },
];

const SERVICIOS = [
  { id: 1, name: "Degustaciones Privadas", desc: "Experiencias sensoriales guiadas por sommelier.", icon: <Wine size={24} /> },
  { id: 2, name: "Catering de Licores", desc: "Barra libre de lujo para tus eventos sociales.", icon: <Award size={24} /> },
];

function App() {
  const [gallery] = useState([
    "https://lkctxyoyajqrhaavnzrv.supabase.co/storage/v1/object/public/business-assets/la_principal_de_licores/gallery/evidencia_1.jpg",
  ]);

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Enviando mensaje...');
    console.log(`Nombre: ${nombre}, Correo: ${correo}, Mensaje: ${mensaje}`);
    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-orange-500/30">
      
      {/* 🏗️ HERO SECTION (TECH NOIR) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={gallery[0]} 
            alt="Hero Background" 
            className="w-full h-full object-cover filter brightness-[0.3] contrast-[1.1] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-orange-500" />
              <span className="text-orange-500 uppercase tracking-[0.5em] text-[10px] font-black">Federación Neural Nexus</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              La Principal <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-white">
                De Licores
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-xl mb-10 font-light leading-relaxed">
              El búnker definitivo para los amantes de la destilación de élite. 
              ADN industrial inyectado para una experiencia sensorial superior.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-400 text-black px-8 py-4 rounded-full font-black uppercase text-[11px] tracking-widest transition-all flex items-center gap-2">
                Explorar Catálogo <ChevronRight size={16} />
              </button>
              <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full font-black uppercase text-[11px] tracking-widest transition-all">
                Nuestra Historia
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 📦 EXPANSIÓN: CATÁLOGO DE ÉLITE (NIVEL 2) */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-2 italic">Catálogo de Élite</h2>
            <p className="text-white/40 uppercase text-[10px] tracking-widest font-bold">Curaduría Industrial de Destilados</p>
          </div>
          <div className="h-[1px] flex-1 bg-white/10 mx-10 hidden md:block" />
          <ShoppingBag className="text-orange-500 opacity-20" size={60} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTOS.map((prod) => (
            <motion.div 
              key={prod.id}
              whileHover={{ y: -10 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-orange-500/30 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <Wine size={100} />
              </div>
              <span className="text-orange-500 text-[9px] font-black uppercase tracking-widest bg-orange-500/10 px-3 py-1 rounded-full mb-4 inline-block">
                {prod.category}
              </span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">{prod.name}</h3>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">{prod.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-black text-white">{prod.price}</span>
                <button className="p-3 bg-white/5 rounded-full hover:bg-orange-500 hover:text-black transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🛠️ EXPANSIÓN: SERVICIOS (NIVEL 2) */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                Experiencias <br/> <span className="text-orange-500">Neurales</span>
              </h2>
              <div className="space-y-6">
                {SERVICIOS.map(serv => (
                  <div key={serv.id} className="flex gap-6 p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                    <div className="h-12 w-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500 shrink-0">
                      {serv.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{serv.name}</h4>
                      <p className="text-white/40 text-sm">{serv.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 group">
              <img 
                src={gallery[0]} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Servicios"
              />
              <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* 📡 NEWSFEED NEURAL (NIVEL 1 RESTAURADO) */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <Zap className="text-orange-500 animate-pulse" size={24} />
          <h2 className="text-4xl font-black uppercase tracking-tighter">NewsFeed Neural</h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-white/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo faucibus, vestibulum ex sed, bibendum est.</p>
          <p className="text-lg text-white/50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo faucibus, vestibulum ex sed, bibendum est.</p>
        </div>
      </section>

      {/* 🤝 PRUEBA SOCIAL & CONTACTO */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter italic">Búnker de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/60">
                  <MapPin className="text-orange-500" />
                  <p className="text-sm">Mz T, trigal del norte, lote 7, Cúcuta, Colombia</p>
                </div>
                <div className="flex items-center gap-4 text-white/60">
                  <MessageSquare className="text-orange-500" />
                  <p className="text-sm">WhatsApp: 3219061209</p>
                </div>
                <div className="flex gap-4 pt-6">
                  <Instagram className="hover:text-orange-500 cursor-pointer transition-colors" />
                  <Facebook className="hover:text-orange-500 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-10 rounded-[2rem] border border-white/10 backdrop-blur-xl relative">
              <div className="absolute -top-6 -right-6 h-20 w-20 bg-orange-500 rounded-full flex items-center justify-center text-black font-black text-xl">
                4.8
              </div>
              <p className="text-2xl font-light italic text-white/80 leading-relaxed mb-10">
                &quot;La mejor selección de Cúcuta. El servicio y el ambiente son de otro nivel. Totalmente recomendado.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-1 w-12 bg-orange-500" />
                <span className="font-bold uppercase text-[10px] tracking-widest text-white/40">Cliente Verificado</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Nombre" 
                className="p-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500/30"
              />
              <input 
                type="email" 
                value={correo} 
                onChange={(e) => setCorreo(e.target.value)} 
                placeholder="Correo Electrónico" 
                className="p-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500/30"
              />
            </div>
            <textarea 
              value={mensaje} 
              onChange={(e) => setMensaje(e.target.value)} 
              placeholder="Mensaje" 
              className="mt-6 p-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500/30"
            />
            <button 
              type="submit" 
              className="mt-6 bg-orange-500 hover:bg-orange-400 text-black px-8 py-4 rounded-full font-black uppercase text-[11px] tracking-widest transition-all"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* 💋 ASESOR BEATRIZ (NIVEL 1 RESTAURADO) */}
      <div className="py-10 container mx-auto px-6 text-center">
        <p className="text-lg font-light italic text-white/80 leading-relaxed mb-10">
          ¿Necesitas ayuda? Estoy aquí para asistirte.
        </p>
        <button 
          className="bg-orange-500 hover:bg-orange-400 text-black px-8 py-4 rounded-full font-black uppercase text-[11px] tracking-widest transition-all"
        >
          Contactar con Beatriz
        </button>
      </div>

      <footer className="py-10 border-t border-white/5 text-center">
        <p className="text-[9px] text-white/20 uppercase tracking-[0.5em] font-black">
          Generado por la Federación Neural Nexus • 2026
        </p>
      </footer>

    </div>
  );
}

export default App;