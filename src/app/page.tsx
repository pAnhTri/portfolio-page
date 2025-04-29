import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import { cn } from "@/lib/utils/cn";

export default function Home() {
  return (
    <main className={cn(`min-h-screen bg-gradient-to-b from-blue-50 to-white`)}>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="hero" className="py-16 md:py-24">
          <Hero />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
            What People Say
          </h2>
          <Testimonials />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
            Projects to Show Off
          </h2>
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
            Skills I&apos;ve Learned
          </h2>
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
            Get in Touch
          </h2>
          <Contact />
        </section>
      </div>
      <Footer />
    </main>
  );
}
