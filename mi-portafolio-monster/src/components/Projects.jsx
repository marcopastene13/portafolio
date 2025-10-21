const proyectos = [
  {
    nombre: "Psicología Centenario",
    desc: "Sitio web moderno y responsivo para un centro psicológico, desarrollado con React, Bootstrap y Vite.js. Permite gestión de especialistas, visualización de servicios, contacto directo y presentación institucional. Implementado como PWA para mayor accesibilidad y rendimiento.",
    tech: "React, Bootstrap, Node.js",
    url: "https://centropsicologico-alpha.vercel.app",
    repo: "https://github.com/marcopastene13/centropsicologico",
    img: "centropsicologico.jpg",
  },
  // Agrega más proyectos aquí
];

export default function Projects() {
  return (
    <section className="container py-5">
      <h2 className="monster-green mb-4">Proyectos</h2>
      <div className="row">
        {proyectos.map((proy, idx) => (
          <div key={idx} className="col-md-6 mb-4">
            <div className="bg-dark p-4 rounded shadow monster-green-border">
              <h4 className="monster-green">{proy.nombre}</h4>
              <img
                src={proy.img}
                alt={proy.nombre}
                className="project-img-monster mb-3"
              />
              <p>{proy.desc}</p>
              <p>
                <span className="monster-green fw-bold">{proy.tech}</span>
              </p>
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
        ))}
      </div>
    </section>
  );
}
