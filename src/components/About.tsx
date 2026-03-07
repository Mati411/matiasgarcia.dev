"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal as TerminalIcon,
  Users2,
  Cpu,
  Globe,
} from "lucide-react";

export default function About({ dict }: { dict: any }) {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 gap-20">
        {/* Columna Izquierda: Bio Narrativa */}
        <div className="space-y-8">
          <div>
            <span className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase font-bold">
              {dict.about.title}
            </span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mt-4 uppercase leading-none">
              {dict.about.subtitle}
            </h2>
          </div>

          <p className="text-2xl text-neutral-300 leading-relaxed font-light italic">
            "{dict.about.bio}"
          </p>

          {/* Badge de Seniority Sutil */}
          <div className="inline-flex items-center gap-3 bg-neutral-900/50 border border-neutral-800 px-6 py-3 rounded-2xl">
            <Cpu className="text-blue-500" size={20} />
            <span className="text-sm font-mono text-neutral-400 uppercase tracking-widest">
              Full Stack Mindset
            </span>
          </div>
        </div>

        {/* Columna Derecha: Timeline Vertical */}
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
          {dict.about.timeline.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icono de la Línea */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-black text-blue-500 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
                {index === 0 ? (
                  <Globe size={18} />
                ) : index === 1 ? (
                  <Users2 size={18} />
                ) : (
                  <TerminalIcon size={18} />
                )}
              </div>

              {/* Contenido de la Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] bg-neutral-900/40 backdrop-blur-sm p-6 rounded-3xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-blue-500 font-bold uppercase tracking-widest">
                    {item.year}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                {item.company && (
                  <p className="text-xs text-neutral-500 mb-3 font-mono">
                    {item.company}
                  </p>
                )}
                <p className="text-sm text-neutral-400 leading-relaxed italic">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
