import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Marquee } from "@/components/Marquee";
import { ProjectList } from "@/components/ProjectList";
import { CredentialsCarousel } from "@/components/CredentialsCarousel";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="bg-dark text-white min-h-screen relative selection:bg-accent-red selection:text-white">
      <Header />
      <main id="home" tabIndex={-1} className="relative z-10 pt-20">
        <Hero />
        <About />
        <Marquee />
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <ProjectList />
          <CredentialsCarousel />
          <Experience />
          <Contact />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
