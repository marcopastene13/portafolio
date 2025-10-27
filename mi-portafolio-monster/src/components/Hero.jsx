import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-monster d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: "100vh" }}>
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="display-name-hero monster-green mb-3"
      >
        Marco Pastene Santander
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="my-4"
      >
        <img
          src="logo.png"
          alt="Tu nombre"
          className="profile-pic-monster"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.9 }}
        className="monster-green lead mb-3"
      >
        Desarrollador Web Full Stack • Creador de contenido y IA
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.13 }}
        transition={{ delay: 1.15, duration: 0.7 }}
      >
        <a href="projects" className="button-monster btn btn-lg mt-3">Ver Proyectos</a>
      </motion.div>
    </section>
  );
}
