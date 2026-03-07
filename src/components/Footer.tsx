export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 border-t border-neutral-900 text-center">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <p className="text-neutral-500 text-sm">
          © 2026 Matías Facundo García. Construido con Next.js & Tailwind.
        </p>
        <div className="flex gap-6 text-neutral-400 text-sm">
          <a href="#" className="hover:text-white">
            GitHub
          </a>
          <a href="#" className="hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
