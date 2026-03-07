"use client";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Database,
  Users,
  Code2,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const ProjectCard = ({ project, icon: Icon, size = "small", dict }: any) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`group relative bg-neutral-900/20 backdrop-blur-xl border border-neutral-800 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between overflow-hidden shadow-2xl ${
      size === "large" ? "md:col-span-2 md:row-span-2" : "col-span-1"
    }`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div>
      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
          <Icon size={28} />
        </div>
        {/* Badge de Impacto (Solo para la grande) */}
        {size === "large" && (
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
            <TrendingUp size={16} className="text-emerald-500" />
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-tighter">
              {project?.impact}
            </span>
          </div>
        )}
      </div>

      <div className={size === "large" ? "grid md:grid-cols-2 gap-8" : "block"}>
        <div className="space-y-4">
          {size === "large" && (
            <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em] font-bold">
              {project.role}
            </span>
          )}
          <h3
            className={`${size === "large" ? "text-4xl md:text-5xl" : "text-3xl"} font-black text-white tracking-tighter leading-tight`}
          >
            {project.title}
          </h3>
          <p className="text-neutral-500 leading-relaxed text-lg">
            {project.desc}
          </p>
        </div>

        {/* Sección de Datos Extra (Solo para la grande) */}
        {size === "large" && (
          <div className="bg-white/5 rounded-3xl p-6 border border-white/5 space-y-4">
            <h4 className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest border-b border-white/10 pb-2">
              Key Achievements
            </h4>
            <ul className="space-y-3">
              {project.achievements.map((item: string) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-neutral-300 font-medium italic"
                >
                  <CheckCircle2 size={16} className="text-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

    <div
      className={`flex flex-col gap-6 ${size === "large" ? "mt-12" : "mt-8"}`}
    >
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-[10px] font-mono py-1 px-3 rounded-full bg-neutral-800/50 text-neutral-400 border border-neutral-700 uppercase tracking-widest"
          >
            {tag}
          </span>
        ))}
      </div>
      <button className="flex items-center gap-2 text-sm font-bold text-neutral-300 group-hover:text-white transition-colors uppercase tracking-widest">
        {dict.view_case} <ExternalLink size={14} />
      </button>
    </div>
  </motion.div>
);

export default function ProjectsGrid({ dict }: { dict: any }) {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20">
        <span className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase">
          {dict.projects.title}
        </span>
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mt-4 uppercase">
          {dict.projects.subtitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {/* Proyecto Principal: España (Grande con métricas) */}
        <ProjectCard
          project={dict.projects.spain}
          icon={Globe}
          size="large"
          dict={dict}
        />

        {/* Proyecto USA (Normal) */}
        <ProjectCard project={dict.projects.usa} icon={Database} dict={dict} />

        {/* Liderazgo / Mentoría (Normal) */}
        <ProjectCard
          project={dict.projects.mentorship}
          icon={Users}
          dict={dict}
        />
      </div>
    </section>
  );
}
