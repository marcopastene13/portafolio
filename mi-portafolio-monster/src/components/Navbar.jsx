import { FaReact, FaCode, FaBootstrap } from 'react-icons/fa';
export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h1 className="monster-green">Mi Portafolio 🟩</h1>
      <div>
        <FaReact className="monster-green mx-2" size={30} />
        <FaBootstrap className="monster-green mx-2" size={30} />
        <FaCode className="monster-green mx-2" size={30} />
      </div>
    </nav>
  );
}
