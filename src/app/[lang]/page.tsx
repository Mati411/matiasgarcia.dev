import { getDictionary } from "@/lib/get-dictionary";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar dict={dict} lang={lang} />
      <Hero dict={dict} />
      <ProjectsGrid dict={dict} />
      <About dict={dict} />
      <Contact dict={dict} />
    </main>
  );
}
