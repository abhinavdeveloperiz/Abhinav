import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import PortfolioSites from "./components/PortfolioSites";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <PortfolioSites />
      <Contact />
    </div>
  );
}
