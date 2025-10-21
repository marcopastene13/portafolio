export default function About() {
  return (
    <section className="container py-5">
      <h2 className="monster-green mb-4">Sobre mí</h2>
      <div className="bg-dark p-4 rounded shadow">
        <p>
          ¡Hola! Soy <span className="monster-green fw-bold">[Marco Pastene Santander]</span>, desarrollador web Full Stack apasionado por crear experiencias modernas y atractivas. 
          Manejo React, Bootstrap, HTML, CSS y JavaScript, buscando siempre diseños fuera de lo común y funcionalidad real. 
          <br />
          <span className="monster-green"></span>
        </p>
        <ul>
          <li className="monster-green">React</li>
          <li className="monster-green">Bootstrap</li>
          <li className="monster-green">JavaScript / HTML / CSS</li>
          <li className="monster-green">Node.js (en progreso)</li>
        </ul>
      </div>
    </section>
  );
}
