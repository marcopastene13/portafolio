import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';

export default function Contact() {
  const formRef = useRef();
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setEnviado(false);
    setError(false);

    emailjs.sendForm(
      'service_pymd7gr',    // <-- reemplaza
      'template_zwf9udk',   // <-- reemplaza
      formRef.current,
      'UW4_T6WEzvCgvTxYy'     // <-- reemplaza
    ).then(() => {
      setEnviado(true);
      formRef.current.reset();
    }, () => {
      setError(true);
    });
  };

  return (
    <section className="container py-5" style={{ minHeight: "100vh", marginTop: "80px" }}>
      <h2 className="monster-green mb-4">Contacto</h2>
      <div className="bg-dark p-4 rounded shadow">
        <form ref={formRef} onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="monster-green form-label">Nombre</label>
            <input name="from_name" type="text" className="form-control" placeholder="Escribe tu nombre" required />
          </div>
          <div className="mb-3">
            <label className="monster-green form-label">Email</label>
            <input name="from_email" type="email" className="form-control" placeholder="Correo electrónico" required />
          </div>
          <div className="mb-3">
            <label className="monster-green form-label">Mensaje</label>
            <textarea name="message" className="form-control" rows="3" placeholder="¿En qué te puedo ayudar?" required></textarea>
          </div>
          <button type="submit" className="button-monster btn w-100 mt-3">Enviar</button>
        </form>
        {enviado &&
          <div className="alert alert-success mt-3">¡Mensaje enviado con éxito!</div>
        }
        {error &&
          <div className="alert alert-danger mt-3">Hubo un error al enviar. Intenta nuevamente.</div>
        }
        <hr className="monster-green my-4" />
        <div className="d-flex gap-4 justify-content-center mt-3">
          <a href="mailto:tuemail@ejemplo.com" className="social-icon-monster" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={38} />
          </a>
          <a href="https://www.linkedin.com/in/marcopastene/" className="social-icon-monster" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={38} />
          </a>
          <a href="https://wa.me/+56947142634" className="social-icon-monster" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={38} />
          </a>
        </div>
      </div>
    </section>
  );
}
