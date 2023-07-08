import Navbar from "@/components/Navbar";
import Header from "../components/Header";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="">
      <section className=" bg-gradient-to-br from-slate-800 to-grey min-h-screen">
        <Navbar />
        <Header />
        <About />
      </section>
    </main>
  );
}
