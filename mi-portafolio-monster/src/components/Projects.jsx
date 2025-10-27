import { motion } from "framer-motion";
// Ejemplo: Importa tus iconos como ya lo haces en About
import { FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";

const proyectos = [
  {
  nombre: "Centro Psicologíco Centenario",
  desc: "Sitio web moderno y responsivo para centro de psicología. Permite gestión de profesionales, servicios, contacto instantáneo y administración segura. Incluye PWA para accesibilidad y JWT para admins.",
  icons: [<FaReact />, <FaBootstrap />, <FaNodeJs />],
  url: "https://centropsicologico-alpha.vercel.app",
  repo: "https://github.com/marcopastene13/centropsicologico",
  img: "/centropsicologico.jpg",
}
,
  // ...más proyectos
];

export default function Projects() {
  return (
    <section className="container py-5" style={{ minHeight: "100vh", marginTop: "80px"}}>
      <h2 className="monster-green mb-4">Proyectos</h2>
      <div className="row">
        {proyectos.map((proy, idx) => (
          <motion.div
            key={idx}
            className="col-12 col-md-6 col-lg-4 mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.13, duration: 0.7 }}
          >
            <div className="bg-dark p-4 rounded shadow monster-green-border h-100 d-flex flex-column justify-content-between">
              <h4 className="monster-green">{proy.nombre}</h4>

              {/* Imagen del proyecto */}
              <div className="overflow-hidden mb-3">
                <motion.img
                  src={proy.img}
                  alt={proy.nombre}
                  className="project-img-monster"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px #39FF14" }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Descripción */}
              <p>{proy.desc}</p>

              {/* Tech stack con íconos + texto */}
              <div className="d-flex gap-2 align-items-center mb-2 mt-2">
                {proy.icons && proy.icons.map((icon, i) => (
                  <span key={i} style={{ fontSize: "1.29em" }}>{icon}</span>
                ))}
                <span className="monster-green fw-bold ms-2">{proy.tech}</span>
              </div>

              {/* Botones */}
              <div className="mt-auto">
                <a
                  className="button-monster btn btn-sm me-2"
                  href={proy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  className="button-monster btn btn-sm"
                  href={proy.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Código
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
