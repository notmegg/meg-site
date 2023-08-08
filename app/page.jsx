import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="">
      <section className=" bg-slate-800 min-h-screen">
        <Navbar />
        <Header />
        <About />
        <Skills/>
        <Projects/>
        <Footer/>
      </section>
    </main>
  );
}
