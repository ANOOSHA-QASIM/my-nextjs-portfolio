import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Services from "./components/services";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Feature from "./components/feature";
import Testimonials from "./components/Testimonals";
import Contact from "./components/Contact";


export default function Home() {
  return (
    <div>
      <div id="hero" className="scroll-mt-20">
        <Hero />
      </div>
      <div id="about" className="scroll-mt-20">
        <About />
      </div>
      <div id="skills" className="scroll-mt-20">
        <Skills />
      </div>
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>
      <div id="services" className="scroll-mt-20">
        <Services />
      </div>
      <div id="experience" className="scroll-mt-20">
        <Experience />
      </div>
      <div id="education" className="scroll-mt-20">
        <Education />
      </div>
      <div id="features" className="scroll-mt-20">
        <Feature />
      </div>
      <div id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </div>
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
     
    </div>
  );
}