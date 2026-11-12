
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shibin C Mathew. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-gray-400 text-sm hover:text-[#a3e635] transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
