import { motion } from "framer-motion";
import {
  FaJs,
  FaCss3,
  FaReact,
  FaPython,
  FaBootstrap,
  FaFigma,
  FaHtml5,
  FaGithub,
  FaGit,
  FaNodeJs,
  FaLock,
  FaDatabase,
  FaFilm,
  FaCamera,
} from "react-icons/fa";
import { SiVite, SiPwa, SiJest, SiFlask } from "react-icons/si";

const skills = [
  // Frontend
  { name: "JavaScript", icon: <FaJs />, type: "Frontend" },
  { name: "CSS", icon: <FaCss3 />, type: "Frontend" },
  { name: "React", icon: <FaReact />, type: "Frontend" },
  { name: "Bootstrap", icon: <FaBootstrap />, type: "Frontend" },
  { name: "HTML", icon: <FaHtml5 />, type: "Frontend" },
  { name: "Vite.js", icon: <SiVite />, type: "Frontend" },
  { name: "PWA", icon: <SiPwa />, type: "Frontend" },
  // Backend
  { name: "Node", icon: <FaNodeJs />, type: "Backend" },
  { name: "Python", icon: <FaPython />, type: "Backend" },
  { name: "Flask", icon: <SiFlask />, type: "Backend" },
  { name: "SQLAlchemy", icon: <FaDatabase />, type: "Backend" },
  { name: "REST APIs", icon: <FaReact />, type: "Backend" },
  { name: "SQL", icon: <FaDatabase />, type: "Backend" },
  { name: "JWT", icon: <FaLock />, type: "Backend" },
  { name: "Jest", icon: <SiJest />, type: "Backend" },
  // Herramientas
  { name: "Git", icon: <FaGit />, type: "Herramienta" },
  { name: "GitHub", icon: <FaGithub />, type: "Herramienta" },
  { name: "Figma", icon: <FaFigma />, type: "Herramienta" },
  // Diseño/Edición
  { name: "Adobe Premiere", icon: <FaFilm />, type: "Diseño / Edición" },
  { name: "Adobe Photoshop", icon: <FaCamera />, type: "Diseño / Edición" },
  { name: "Avid Media Composer", icon: <FaFilm />, type: "Diseño / Edición" },
];

const skillTypes = ["Frontend", "Backend", "Herramienta", "Diseño / Edición"];

const certifications = [
  {
    nombre: "Full Stack Software Developer",
    entidad: "4Geeks",
    fecha: "2025",
    url: "https://certificate.4geeks.com/fddc2428702648eb09f20c6c4330ca64c80f91ea",
    img: "certificado.jpg",
  },
];

export default function About() {
  return (
    <section
      className="about-monster container d-flex flex-column align-items-center justify-content-center py-5"
      style={{ minHeight: "100vh", marginTop: "80px" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="monster-green mb-4"
      >
        Sobre mí
      </motion.h2>
      <div className="d-flex justify-content-center mb-3">
        <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.18, duration: 0.7 }}
      >
        <img
          src="/mifoto.jpg"
          alt="Marco Pastene"
          className="profile-pic-monster"
        />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.18, duration: 0.7 }}
        className="bg-dark p-4 rounded shadow about-panel"
      >
        <p className="lead">
          ¡Hola! Soy{" "}
          <span className="monster-green fw-bold">Marco Pastene Santander</span>
          , desarrollador web Full Stack enfocado en crear experiencias
          modernas, atractivas y de alto rendimiento. Trabajo con tecnologías
          modernas, las integracion de IA en los proyectos y siempre enfocado en
          el buen diseño y las buenas practicas.
          <br />
          Me apasionan los desafíos, la innovación y el diseño visual inspirado
          en la energía Monster. Tambien tengo basta experiencia en proyectos
          audiovisuales, he trabajado en videos musicales, videos
          institucionales y como fotografo. Me caracterizo por siempre estar
          buscando aprender cosas nuevas y buscar soluciones a las distintas
          dificultades que se van generando en el camino.
        </p>
        <h4 className="monster-green mt-4 mb-2">Skills principales</h4>
        <div className="row">
          {skillTypes.map((cat) => (
            <div className="col-12 col-md-6 mb-3" key={cat}>
              <div>
                <span className="monster-green-fw">{cat}:</span>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {skills
                    .filter((s) => s.type === cat)
                    .map((skill) => (
                      <span className="skill-chip-monster" key={skill.name}>
                        <span className="me-1">{skill.icon}</span> {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <h4 className="monster-green mt-5 mb-3">Certificaciones</h4>
      <div className="row justify-content-center">
        {certifications.map((cert, idx) => (
          <div
            key={cert.nombre + idx}
            className="col-12 col-md-10 d-flex flex-column align-items-center"
          >
            <div className="cert-card-monster monster-glow mb-5">
              <div className="cert-img-wrap mb-2 mt-3">
                <img
                  src={cert.img}
                  alt={cert.entidad}
                  className="cert-card-img"
                />
              </div>
              <h3 className="monster-green mt-2 mb-0">{cert.nombre}</h3>
              <a
                href={cert.url}
                className="monster-green d-block mb-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cert.entidad}
              </a>
              <span className="cert-date mb-3">{cert.fecha}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
