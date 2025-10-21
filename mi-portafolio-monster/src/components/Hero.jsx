import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="d-flex flex-column justify-content-center align-items-center p-5"
    >
      <h2 className="monster-green display-4">Tu Nombre</h2>
      <p className="monster-green lead">Web Developer - Full Stack</p>
      <button className="button-monster mt-3">Ver Proyectos</button>
    </motion.div>
  );
}
