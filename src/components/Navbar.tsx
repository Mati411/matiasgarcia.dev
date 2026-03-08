"use client";
import Logo from "@/assets/icons/Logo";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
  const pathname = usePathname();
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -5,
      transition: { duration: 0.2 },
    },
  };

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black/50 backdrop-blur-md border-b border-neutral-900">
      <div className="flex items-center relative h-12 min-w-[50px]">
        <Link
          href={`/${lang}`}
          className="flex items-center group"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
        >
          <Logo
            className={`w-12 h-12 transition-colors duration-300 ${isLogoHovered ? "text-blue-500" : "text-white group-hover:text-blue-500"}`}
            strokeWidth={2}
          />

          <AnimatePresence>
            {isLogoHovered && (
              <motion.span
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute left-14 whitespace-nowrap text-sm font-mono text-neutral-400 uppercase tracking-[0.4em] font-bold pointer-events-none"
              >
                Matias Garcia
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
        <a href="#projects" className="hover:text-white transition-colors">
          {dict.nav.projects}
        </a>
        <a href="#about" className="hover:text-white transition-colors">
          {dict.nav.about}
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          {dict.nav.contact}
        </a>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 border-r border-neutral-800 pr-4">
          <Link
            href={redirectedPathname("en")}
            className={`text-[10px] font-bold ${lang === "en" ? "text-blue-500" : "text-neutral-600 hover:text-white"}`}
          >
            EN
          </Link>
          <Link
            href={redirectedPathname("es")}
            className={`text-[10px] font-bold ${lang === "es" ? "text-blue-500" : "text-neutral-600 hover:text-white"}`}
          >
            ES
          </Link>
        </div>

        <a
          href="https://github.com/Mati411"
          target="_blank"
          className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-lg transition-all"
        >
          <Github size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/matias-garcia1204"
          target="_blank"
          className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-lg transition-all"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </nav>
  );
}
