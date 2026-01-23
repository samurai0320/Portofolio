import './App.css'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

function App() {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path ? 'active' : ''

  return (
    <div className="app-container">
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

      <nav className="bottom-nav">
        <Link to="/" className={`nav-btn ${isActive('/')}`}>Home</Link>
        <Link to="/about" className={`nav-btn ${isActive('/about')}`}>About</Link>
        <Link to="/skills" className={`nav-btn ${isActive('/skills')}`}>Skills</Link>
        <Link to="/projects" className={`nav-btn ${isActive('/projects')}`}>Projects</Link>
        <Link to="/contact" className={`nav-btn ${isActive('/contact')}`}>Contact</Link>
      </nav>
    </div>
  )
}

export default App