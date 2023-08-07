import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="">
      <section className=" bg-slate-800 min-h-screen">
        <Navbar />
        <Header />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
      </section>
    </main>
  );
}
