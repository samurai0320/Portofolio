import './index.css'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

function App() {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  const navBase = 'px-6 py-2 rounded-full font-semibold transition duration-200 border border-slate-700/70 backdrop-blur text-white'
  const navActive = 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/30'
  const navInactive = 'bg-slate-900/50 hover:bg-slate-800/70'

  return (
    <div className="relative min-h-screen w-full text-white">
      <div className="stars-wrapper">
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <nav className="fixed bottom-5 left-0 right-0 flex justify-center z-20">
        <div className="flex gap-2 px-3 py-2 bg-slate-900/70 border border-slate-800/70 rounded-full shadow-xl backdrop-blur">
          <Link to="/" className={`${navBase} ${isActive('/') ? navActive : navInactive}`}>Home</Link>
          <Link to="/about" className={`${navBase} ${isActive('/about') ? navActive : navInactive}`}>About</Link>
          <Link to="/skills" className={`${navBase} ${isActive('/skills') ? navActive : navInactive}`}>Skills</Link>
          <Link to="/projects" className={`${navBase} ${isActive('/projects') ? navActive : navInactive}`}>Projects</Link>
          <Link to="/contact" className={`${navBase} ${isActive('/contact') ? navActive : navInactive}`}>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default App