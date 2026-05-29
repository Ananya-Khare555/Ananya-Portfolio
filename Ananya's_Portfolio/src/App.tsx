import { Navbar } from "./components/portfolio/Navbar";
import { ScrollProgress } from "./components/portfolio/ScrollProgress";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Experience } from "./components/portfolio/Experience";
import { Projects } from "./components/portfolio/Projects";
import { Education } from "./components/portfolio/Education";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";
import { BackToTop } from "./components/portfolio/BackToTop";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;