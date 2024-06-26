import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDevider from "@/components/SectionDevider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
