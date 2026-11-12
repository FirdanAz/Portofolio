import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectList } from "@/components/ProjectList";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-12 fade-in-section">
      <Header />
      <main id="top" tabIndex={-1}>
        <Hero />
        <ProjectList />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

