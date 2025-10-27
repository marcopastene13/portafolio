import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="container py-5" style={{ minHeight: "100vh", marginTop: "80px" }}>
      <h2 className="monster-green mb-4">Contacto</h2>
      <div className="bg-dark p-4 rounded shadow">
        <form>
          <div className="mb-3">
            <label className="monster-green form-label">Nombre</label>
            <input type="text" className="form-control" placeholder="Escribe tu nombre" required />
          </div>
          <div className="mb-3">
            <label className="monster-green form-label">Email</label>
            <input type="email" className="form-control" placeholder="Correo electrónico" required />
          </div>
          <div className="mb-3">
            <label className="monster-green form-label">Mensaje</label>
            <textarea className="form-control" rows="3" placeholder="¿En qué te puedo ayudar?" required></textarea>
          </div>
          <button type="submit" className="button-monster btn w-100 mt-3">Enviar</button>
        </form>
        <hr className="monster-green my-4" />
        {/* Solo iconos, grandes y con animación Monster */}
        <div className="d-flex gap-4 justify-content-center mt-3">
          <a 
            href="https://www.linkedin.com/in/marcopastene/" 
            className="social-icon-monster"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin size={38} />
          </a>
          <a 
            href="https://wa.me/+56947142634"
            className="social-icon-monster"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={38} />
          </a>
          <a 
            href="mpastene1996@outlook.com"
            className="social-icon-monster"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={38} />
          </a>
        </div>
      </div>
    </section>
  );
}
