"use client";
import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  Terminal,
  Cpu,
  Github,
  ExternalLink,
} from "lucide-react";

const GridItem = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`bg-[#121212] border border-neutral-800 rounded-3xl p-6 hover:border-neutral-700 transition-colors flex flex-col justify-between ${className}`}
  >
    {title && (
      <h3 className="text-neutral-500 text-sm font-medium mb-4 uppercase tracking-wider">
        {title}
      </h3>
    )}
    {children}
  </motion.div>
);

export default function HomeGrid() {
  return (
    <section className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
      <GridItem className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
        <div className="flex flex-col h-full justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Matías García
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Ingeniero de Software Senior especializado en{" "}
            <span className="text-white">Frontend</span> con una sólida
            transición hacia arquitecturas{" "}
            <span className="text-white">Backend</span>.
          </p>
        </div>
      </GridItem>

      <GridItem className="md:col-span-2" title="Mercados Globales">
        <div className="flex items-center gap-4">
          <Globe className="text-blue-500 w-8 h-8" />
          <p className="text-lg text-neutral-200">
            Proyectos entregados para{" "}
            <span className="font-bold">USA, España y Argentina</span>.
          </p>
        </div>
      </GridItem>

      <GridItem title="Core Stack">
        <div className="grid grid-cols-2 gap-2 text-neutral-400">
          <div className="flex items-center gap-2 font-semibold text-white">
            Angular
          </div>
          <div className="flex items-center gap-2">React</div>
          <div className="flex items-center gap-2 font-semibold text-white">
            Node.js
          </div>
          <div className="flex items-center gap-2 font-semibold text-white text-sm">
            Java
          </div>
        </div>
      </GridItem>

      <GridItem className="bg-emerald-950/20 border-emerald-900/30">
        <div className="text-center">
          <span className="text-4xl font-bold text-emerald-500">-20%</span>
          <p className="text-xs text-emerald-400 mt-2 uppercase">
            Tiempo de carga optimizado en apps enterprise
          </p>
        </div>
      </GridItem>

      <GridItem
        className="md:col-span-2 md:row-span-2"
        title="Proyecto Destacado: España"
      >
        <div className="space-y-4">
          <p className="text-lg text-neutral-300">
            Mantenimiento y evolución de 3 plataformas críticas. Refactorización
            de <span className="text-white italic">legacy code</span> a
            componentes modernos.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">
              Angular
            </span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">
              Node.js
            </span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300">
              SQL
            </span>
          </div>
          <button className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors">
            Ver detalle técnico <ExternalLink size={14} />
          </button>
        </div>
      </GridItem>

      <GridItem className="flex items-center justify-center group cursor-pointer">
        <a
          href="https://github.com/Mati411"
          target="_blank"
          className="flex flex-col items-center"
        >
          <Github className="w-10 h-10 mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-xs text-neutral-500 font-mono">/Mati411</span>
        </a>
      </GridItem>

      <GridItem title="Mentoría">
        <p className="text-sm text-neutral-400">
          Tutor de <span className="text-white">pasantes</span> en Bewise,
          impulsando mejores prácticas y código limpio.
        </p>
      </GridItem>
    </section>
  );
}
