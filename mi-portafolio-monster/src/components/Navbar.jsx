import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h1 className="monster-green">Portafolio </h1>
      <div>
        <Link className="btn button-monster mx-2" to="/">Inicio</Link>
        <Link className="btn button-monster mx-2" to="/about">Sobre mí</Link>
        <Link className="btn button-monster mx-2" to="/projects">Proyectos</Link>
        <Link className="btn button-monster mx-2" to="/contact">Contacto</Link>
        <FaCode className="monster-green mx-2" size={30} />
      </div>
    </nav>
  );
}
