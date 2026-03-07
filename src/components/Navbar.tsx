"use client";
import Logo from "@/assets/icons/Logo";
import { Github, Linkedin, Languages } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
  const pathname = usePathname();

  // Función simple para cambiar de idioma en la URL
  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black/50 backdrop-blur-md border-b border-neutral-900">
      <Link href={`/${lang}`} className="flex items-center gap-3 group">
        <Logo
          className="w-12 h-12 text-white group-hover:text-blue-500 transition-colors"
          strokeWidth={2}
        />
      </Link>

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
        {/* Selector de Idioma */}
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
