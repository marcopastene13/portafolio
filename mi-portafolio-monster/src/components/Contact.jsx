export default function Contact() {
  return (
    <section className="container py-5">
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
        <div>
          <span className="monster-green me-2">LinkedIn:</span>
          <a href="https://www.linkedin.com/in/marcopastene/" className="monster-green" target="_blank" rel="noopener noreferrer">Tu perfil</a>
        </div>
        <div>
          <span className="monster-green me-2">WhatsApp:</span>
          <a href="https://wa.me/+56947142634" className="monster-green" target="_blank" rel="noopener noreferrer">Envíame un mensaje</a>
        </div>
      </div>
    </section>
  );
}
