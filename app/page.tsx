import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-dark text-white min-h-screen relative selection:bg-accent-red selection:text-white">
      <Header />
      <main id="home" tabIndex={-1} className="relative z-10 pt-20">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
          <Hero />
          <div id="project">
            <ProjectList />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
