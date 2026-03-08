"use client";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Database,
  Users,
  CheckCircle2,
  TrendingUp,
  Code2,
} from "lucide-react";

const ProjectCard = ({ project, icon: Icon, size = "small", dict }: any) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`group relative bg-neutral-900/20 backdrop-blur-xl border border-neutral-800 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between overflow-hidden shadow-2xl ${
      size === "large" ? "md:col-span-2 md:row-span-2" : "col-span-1"
    }`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div>
      <div className="flex justify-between items-start mb-6 md:mb-8">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
          <Icon size={24} className="md:w-7 md:h-7" />
        </div>
        {size === "large" && (
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 md:px-4 md:py-2 rounded-xl">
            <TrendingUp size={14} className="text-emerald-500 md:w-4 md:h-4" />
            <span className="text-[10px] md:text-xs font-bold text-emerald-500 uppercase tracking-tighter">
              {project?.impact}
            </span>
          </div>
        )}
      </div>

      <div
        className={
          size === "large" ? "grid md:grid-cols-2 gap-6 md:gap-8" : "block"
        }
      >
        <div className="space-y-3 md:space-y-4">
          {size === "large" && (
            <span className="text-[9px] md:text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em] font-bold">
              {project.role}
            </span>
          )}
          <h3
            className={`${size === "large" ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"} font-black text-white tracking-tighter leading-tight uppercase`}
          >
            {project.title}
          </h3>
          <p className="text-neutral-500 leading-relaxed text-base md:text-lg">
            {project.desc}
          </p>
        </div>

        {size === "large" && (
          <div className="bg-white/5 rounded-2xl md:rounded-3xl p-5 md:p-6 border border-white/5 space-y-3 md:space-y-4 mt-4 md:mt-0 h-fit">
            <h4 className="text-[9px] md:text-[10px] font-mono text-neutral-400 uppercase tracking-widest border-b border-white/10 pb-2">
              Key Achievements
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {project.achievements.map((item: string) => (
                <li
                  key={item}
                  className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-neutral-300 font-medium italic"
                >
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

    <div
      className={`flex flex-col gap-4 md:gap-6 ${size === "large" ? "mt-8 md:mt-12" : "mt-6 md:mt-8"}`}
    >
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-[9px] md:text-[10px] font-mono py-1 px-2.5 md:px-3 rounded-full bg-neutral-800/50 text-neutral-400 border border-neutral-700 uppercase tracking-widest font-bold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function ProjectsGrid({ dict }: { dict: any }) {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-16 md:py-24 overflow-hidden"
    >
      <div className="mb-12 md:mb-20">
        <span className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase font-bold">
          {dict.projects.title}
        </span>
        <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mt-2 uppercase break-words leading-[0.85]">
          {dict.projects.subtitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <ProjectCard
            project={dict.projects.spain}
            icon={Globe}
            size="large"
            dict={dict}
          />
        </div>

        <ProjectCard project={dict.projects.bago} icon={Database} dict={dict} />

        <ProjectCard project={dict.projects.usa} icon={Code2} dict={dict} />

        <div className="lg:col-span-2">
          <ProjectCard
            project={dict.projects.mentorship}
            icon={Users}
            dict={dict}
          />
        </div>
      </div>
    </section>
  );
}
