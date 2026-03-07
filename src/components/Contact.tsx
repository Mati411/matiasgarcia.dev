"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";

export default function Contact({ dict }: { dict: any }) {
  const [copied, setCopied] = useState(false);
  const email = "matiasgarcia1204@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <span className="text-blue-500 font-mono text-sm tracking-[0.4em] uppercase font-bold">
            {dict.contact.title}
          </span>
          <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter text-white mt-4 uppercase leading-none">
            {dict.contact.subtitle}
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          {dict.contact.description}
        </p>

        {/* Card de Email con Interacción */}
        <div className="pt-10">
          <div className="relative inline-flex flex-col md:flex-row items-center gap-6 bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 p-8 md:p-12 rounded-[3rem] group">
            <div className="space-y-2 text-left">
              <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-bold">
                Direct Email
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                {email}
              </h3>
            </div>

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? dict.contact.copied : dict.contact.copy_email}
            </button>
          </div>
        </div>

        {/* Links Secundarios */}
        <div className="flex justify-center gap-8 pt-12">
          <a
            href="https://www.linkedin.com/in/matias-garcia1204"
            target="_blank"
            className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/Mati411"
            target="_blank"
            className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
          >
            <Github size={20} /> GitHub
          </a>
        </div>
      </motion.div>

      {/* Footer sutil */}
      <footer className="mt-20 pt-10 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-neutral-600 font-mono text-[10px] uppercase tracking-widest">
          © 2026 MATÍAS GARCÍA — BUENOS AIRES, AR
        </span>
        <span className="text-neutral-600 font-mono text-[10px] uppercase tracking-widest italic">
          Built with Next.js & Passion
        </span>
      </footer>
    </section>
  );
}
