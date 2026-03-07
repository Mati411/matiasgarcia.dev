"use client";
import { FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Terminal from "./Terminal";

export default function Hero({ dict }: any) {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-10 md:px-40 pt-20 overflow-hidden bg-black selection:bg-blue-500/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#0a192f_0%,transparent_50%)] opacity-40" />

      {/* Contenido Izquierdo: Enfocado en IMPACTO */}
      <div className="flex-1 z-20 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase">
            {dict.hero.role}
          </span>

          <h1 className="flex flex-col text-7xl md:text-[9rem] font-black tracking-[-0.07em] leading-none uppercase">
            {/* Capa Superior: Sólida y Blanca */}
            <span className="relative text-white">Matias</span>

            {/* Capa Inferior: Outline, Italic y Superpuesta */}
            <span className="relative z-10 -mt-10 md:-mt-16 text-neutral-600 outline-text italic transition-all duration-300">
              Garcia
            </span>
          </h1>

          <div className="max-w-md mt-4 space-y-2">
            <p className="text-xl md:text-2xl text-white font-medium leading-tight italic">
              {dict.hero.description}
            </p>
            <p className="text-lg text-neutral-500 leading-tight">
              {dict.hero.subdescription}
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="bg-white text-black px-10 py-4 rounded-full font-black transition duration-200 flex items-center gap-2 cursor-pointer hover:bg-neutral-900 hover:text-white ">
            <FileText size={20} /> {dict.hero.cv}
          </button>
          <button className="group border border-neutral-800 text-neutral-300 px-10 py-4 rounded-full font-bold hover:bg-neutral-900 transition-all flex items-center gap-2 cursor-pointer">
            {dict.hero.projects}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>
      </div>

      {/* Lado Derecho: Terminal (Sin cambios, ya que te gusta) */}
      <div className="flex-1 w-full h-full relative z-10 flex items-center justify-end">
        <Terminal dict={dict} />
      </div>

      <style jsx global>{`
        .outline-text {
          -webkit-text-stroke: 1.5px #808080;
          color: transparent;
          transition: -webkit-text-stroke 0.3s ease;
        }

        .outline-text:hover {
          -webkit-text-stroke: 1.5px #909090;
        }
      `}</style>
    </section>
  );
}
