"use client";

import React from 'react';
import { 
  Code2, Cpu, Zap, Mail, MapPin, 
  Terminal, Monitor, Database, Bike, Layers, ArrowUpRight 
} from 'lucide-react';

// --- DATOS DE TADEO ---
const DATA = {
  name: "Tadeo Boglione",
  role: "Full Stack & Hardware",
  email: "tadeo.boglionee@gmail.com",
  location: "Córdoba, ARG",
  status: "Open to Work",
  about: "Desarrollador Full Stack y Técnico con visión de hardware. No solo escribo código, entiendo los circuitos donde corre. Especialista en PHP, JS y Telemetría IoT.",
  tech: [
    "PHP / CodeIgniter", "JavaScript / ES6+", "MySQL / Database", 
    "IoT / Telemetry", "Hardware Repair", "UX/UI Design"
  ],
  education: [
    { title: "Tecnicatura Universitaria en Programación", place: "Escuela Superior de Comercio", year: "2025 - Act", type: "University" },
    { title: "Técnico en Informática", place: "Instituto Técnico Río Tercero", year: "2018 - 2024", type: "High School", badge: "Promedio 8.36 (Top 2)" }
  ],
  jobs: [
    { title: "Programador Full-Stack", company: "Muni. Río Tercero", year: "May 2025 - Act" },
    { title: "Soporte Técnico & Hardware", company: "ETEC Electrónica", year: "Ago 2024 - Sep 2024" }
  ]
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-violet-500/30 selection:text-violet-200 font-sans p-4 md:p-8">
      
      {/* Fondo con "Ruido" para textura moderna */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- BENTO GRID LAYOUT --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 relative z-10">

        {/* 1. HERO - NAME (Ocupa mucho espacio) */}
        <div className="col-span-1 md:col-span-4 lg:col-span-4 row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-600/30 transition-all duration-700"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {DATA.status}
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4">
              Tadeo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">
                Boglione.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mt-4 leading-relaxed">
              {DATA.about}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${DATA.email}`} className="group relative px-6 py-3 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform">
              <Mail size={20} /> Contact Me
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="px-6 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-neutral-400 flex items-center gap-2">
              <MapPin size={18} /> {DATA.location}
            </div>
          </div>
        </div>

        {/* 2. TECH STACK (Vertical) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col gap-4 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
          <h3 className="text-neutral-500 font-medium uppercase tracking-widest text-sm flex items-center gap-2">
            <Cpu size={16} /> Stack
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {DATA.tech.map((t, i) => (
              <span key={i} className="px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-sm text-neutral-300 hover:border-violet-500/50 hover:text-white transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-auto pt-8">
            <div className="text-6xl font-bold text-neutral-800 select-none absolute bottom-4 right-4 rotate-12">
              DEV
            </div>
          </div>
        </div>

        {/* 3. PROJECT S-TRACK (Destacado Visual) */}
        <div className="col-span-1 md:col-span-4 lg:col-span-3 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-orange-500/30 transition-colors duration-500">
          <div className="absolute top-0 right-0 p-32 bg-orange-500/10 rounded-full blur-[80px] group-hover:bg-orange-500/20 transition-all"></div>
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-400 border border-orange-500/20">
              <Bike size={32} />
            </div>
            <span className="px-3 py-1 rounded-full bg-neutral-800 text-xs font-bold text-neutral-400 border border-neutral-700">
              FEATURED PROJECT
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:text-orange-100 transition-colors">
            S-Track Telemetry
          </h2>
          <p className="text-neutral-400 mb-6 max-w-md">
            Sistema IoT de telemetría para MTB. Sensores de hardware real (presión, altura) conectados a una plataforma web CodeIgniter.
          </p>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
              <span className="block text-orange-400 font-bold">Hardware</span>
              Arduino / Sensores
            </div>
            <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
              <span className="block text-orange-400 font-bold">Software</span>
              PHP / JS / MySQL
            </div>
          </div>
        </div>

        {/* 4. EXPERIENCE (Lista Compacta) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-center">
          <h3 className="text-neutral-500 font-medium uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
            <Terminal size={16} /> Experiencia
          </h3>
          <div className="space-y-6">
            {DATA.jobs.map((job, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div>
                  <h4 className="text-lg font-bold text-neutral-200 group-hover:text-violet-400 transition-colors">{job.title}</h4>
                  <p className="text-neutral-500 text-sm">{job.company}</p>
                </div>
                <span className="text-xs font-mono text-neutral-600 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
                  {job.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. EDUCATION (Con Badge de Promedio) */}
        <div className="col-span-1 md:col-span-3 bg-neutral-100 text-black border border-neutral-200 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-[-20px] right-[-20px] rotate-12 opacity-10">
            <Code2 size={150} />
          </div>
          
          <h3 className="text-neutral-500 font-bold uppercase tracking-widest text-sm mb-6">
            Educación.
          </h3>
          
          <div className="space-y-8 relative z-10">
            {DATA.education.map((edu, i) => (
              <div key={i} className="border-l-2 border-neutral-300 pl-4">
                <h4 className="text-xl font-bold">{edu.title}</h4>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <p className="text-neutral-600 font-medium">{edu.place}</p>
                  {edu.badge && (
                    <span className="px-2 py-0.5 bg-black text-white text-xs font-bold rounded-md">
                      {edu.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-neutral-500 mt-1 font-mono">{edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. SOFTWARE SKILLS (Grid pequeño) */}
        <div className="col-span-1 md:col-span-3 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 grid grid-cols-2 gap-4">
           <ToolBox icon={<Layers />} title="Design" items="Ps, Ai, Draw.io" />
           <ToolBox icon={<Database />} title="Database" items="MySQL, SQL" />
           <ToolBox icon={<Monitor />} title="Office" items="Excel, PowerPt" />
           <ToolBox icon={<Zap />} title="Soft Skills" items="Critical Thinking" />
        </div>

      </div>

      <footer className="max-w-7xl mx-auto mt-12 py-6 text-center text-neutral-600 text-sm flex justify-between items-center px-4">
        <p>2025 © Tadeo Boglione</p>
        <p className="font-mono text-xs opacity-50">DESIGN: BENTO_V1</p>
      </footer>
    </div>
  );
}

// Componente pequeño para herramientas
function ToolBox({ icon, title, items }: any) {
  return (
    <div className="bg-neutral-800/40 p-4 rounded-2xl hover:bg-neutral-800 transition-colors">
      <div className="text-violet-400 mb-2">{icon}</div>
      <div className="font-bold text-neutral-300">{title}</div>
      <div className="text-xs text-neutral-500">{items}</div>
    </div>
  );
}