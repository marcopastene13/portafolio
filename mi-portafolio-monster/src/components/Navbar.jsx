import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserAlt, FaCode, FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const activeLink = (path) =>
    location.pathname === path ? 'navbar-link-monster active' : 'navbar-link-monster';

  return (
    <nav className="navbar-monster fixed-top d-flex justify-content-between align-items-center px-4 py-3">
      <div className="monster-logo">
        <span className="monster-green fw-bold fs-3">MONSTER DEV</span>
      </div>
      {/* Botón hamburguesa visible solo en mobile */}
      <button className="navbar-hamburger d-lg-none" onClick={() => setOpen(o => !o)} aria-label="Menu">
        {open ? <FaTimes size={26} /> : <FaBars size={26} />}
      </button>
      <div className={`navbar-menu d-flex gap-4 ${open ? 'mobile-open' : ''}`}>
        <Link to="/" className={activeLink('/')} onClick={() => setOpen(false)}>
          <FaHome className="me-1" /> Inicio
        </Link>
        <Link to="/about" className={activeLink('/about')} onClick={() => setOpen(false)}>
          <FaUserAlt className="me-1" /> Sobre mí
        </Link>
        <Link to="/projects" className={activeLink('/projects')} onClick={() => setOpen(false)}>
          <FaCode className="me-1" /> Proyectos
        </Link>
        <Link to="/contact" className={activeLink('/contact')} onClick={() => setOpen(false)}>
          <FaEnvelope className="me-1" /> Contacto
        </Link>
      </div>
      <div className="navbar-social d-flex gap-3 ms-3">
        <a href="https://github.com/marcopastene13" target="_blank" rel="noopener noreferrer" className="social-icon-monster">
          <FaGithub size={28} />
        </a>
        <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="social-icon-monster">
          <FaLinkedin size={28} />
        </a>
        <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer" className="social-icon-monster">
          <FaWhatsapp size={28} />
        </a>
      </div>
    </nav>
  );
}
