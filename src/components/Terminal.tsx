"use client";
import { motion } from "framer-motion";

export default function Terminal({ dict }: any) {
  return (
    <div className="flex-1 w-full h-full relative z-10 flex items-center justify-end">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        /* Eliminamos 'aspect-video' y usamos 'h-fit' con un ancho máximo mayor */
        className="relative w-full max-w-2xl h-fit bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Barra superior */}
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-800/50 border-b border-neutral-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors" />
          </div>
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em]">
            matias_garcia.json — 127.0.0.1
          </span>
        </div>

        {/* Contenido del Código: Ajustamos el padding para ganar aire */}
        <div className="p-6 md:p-10 font-mono text-sm sm:text-base leading-relaxed">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-1"
          >
            <p>
              <span className="text-blue-400">const</span>{" "}
              <span className="text-white">engineer</span> = {"{"}
            </p>

            <p className="pl-6">
              <span className="text-neutral-500">role:</span>{" "}
              <span className="text-green-400">
                "Senior Full Stack Developer"
              </span>
              ,
            </p>

            <p className="pl-6">
              <span className="text-neutral-500">experience:</span>{" "}
              <span className="text-yellow-400">
                "{dict.terminal?.experience}"
              </span>
              ,
            </p>

            <p className="pl-6">
              <span className="text-neutral-500">location:</span>{" "}
              <span className="text-green-400">
                "{dict.terminal?.location}"
              </span>
              ,
            </p>

            <p className="pl-6">
              <span className="text-neutral-500">tech_stack:</span> {"{"}
            </p>
            <p className="pl-12">
              <span className="text-neutral-500">frontend:</span> [
              <span className="text-blue-300">"Angular"</span>,{" "}
              <span className="text-blue-300">"React"</span>,{" "}
              <span className="text-blue-300">"Next.js"</span>],
            </p>
            <p className="pl-12">
              <span className="text-neutral-500">backend:</span> [
              <span className="text-blue-300">"Node.js"</span>,{" "}
              <span className="text-blue-300">"Java"</span>,{" "}
              <span className="text-blue-300">"SQL"</span>]
            </p>
            <p className="pl-6">{"},"}</p>

            {/* <p className="pl-6">
              <span className="text-neutral-500">highlights:</span> [
            </p>
            <p className="pl-12 text-yellow-500/80">
              "10+ Successful Enterprise Projects",
            </p>
            <p className="pl-12 text-yellow-500/80">
              "Internship Tutor & Mentor"
            </p>
            <p className="pl-6">],</p> */}

            <p className="pl-6">
              <span className="text-neutral-500">availability:</span>{" "}
              <span className="text-green-400">
                "{dict.terminal?.availability}"
              </span>
            </p>

            <p className="text-white">{"};"}</p>
          </motion.div>
        </div>

        {/* Brillos ambientales sutiles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
      </motion.div>
    </div>
  );
}
