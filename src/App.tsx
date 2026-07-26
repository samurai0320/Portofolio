import { useEffect, useState } from 'react'
import './index.css'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import ProjectDetail from './Pages/ProjectDetail'
import Contact from './Pages/Contact'

const MainPortfolio = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="flex flex-col">
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

function App() {
  const location = useLocation();
  const isRoot = location.pathname === '/';
  
  const [activeSection, setActiveSection] = useState(location.hash || '#home');

  useEffect(() => {
    if (!isRoot) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isRoot, location]);

  const isActive = (hash: string) => isRoot && activeSection === hash;

  const navBase = 'px-6 py-2 rounded-full font-semibold transition duration-200 border border-slate-700/70 backdrop-blur text-white'
  const navActive = 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/30'
  const navInactive = 'bg-slate-900/50 hover:bg-slate-800/70'

  return (
    <div className="relative w-full text-white">
      <div className="stars-wrapper">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
      </div>

      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      <nav className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
        <div className="flex gap-2 px-3 py-2 bg-slate-900/70 border border-slate-800/70 rounded-full shadow-xl backdrop-blur">
          <Link to="/#home" className={`${navBase} ${isActive('#home') ? navActive : navInactive}`}>Home</Link>
          <Link to="/#about" className={`${navBase} ${isActive('#about') ? navActive : navInactive}`}>About</Link>
          <Link to="/#skills" className={`${navBase} ${isActive('#skills') ? navActive : navInactive}`}>Skills</Link>
          <Link to="/#projects" className={`${navBase} ${isActive('#projects') ? navActive : navInactive}`}>Projects</Link>
          <Link to="/#contact" className={`${navBase} ${isActive('#contact') ? navActive : navInactive}`}>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default App