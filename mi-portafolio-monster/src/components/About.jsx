import { FaJs, FaCss3, FaReact, FaPython, FaBootstrap, FaFigma, FaHtml5, FaGithub, FaGit, FaNodeJs, FaLock } from 'react-icons/fa';
import { SiVite, SiPwa, SiJest, SiFlask, SiSqlalchemy, SiMysql, SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <FaJs />, type: 'frontend' },
  { name: 'CSS', icon: <FaCss3 />, type: 'frontend' },
  { name: 'React', icon: <FaReact />, type: 'frontend' },
  { name: 'BootStrap', icon: <FaBootstrap />, type: 'frontend' },
  { name: 'HTML', icon: <FaHtml5 />, type: 'frontend' },
  { name: 'Vite.js', icon: <SiVite />, type: 'frontend' },
  { name: 'PWA', icon: <SiPwa />, type: 'frontend' },

  { name: 'Node', icon: <FaNodeJs />, type: 'backend' },
  { name: 'Python', icon: <FaPython />, type: 'backend' },
  { name: 'Flask', icon: <SiFlask />, type: 'backend' },
  { name: 'SQLAlchemy', icon: <SiSqlalchemy />, type: 'backend' },
  { name: 'Restful APIs', icon: <FaReact />, type: 'backend' }, // Puedes usar un icono de API si quieres otro mejor
  { name: 'SQL', icon: <SiMysql />, type: 'backend' },
  { name: 'JWT', icon: <FaLock />, type: 'backend' },
  { name: 'Jest', icon: <SiJest />, type: 'backend' },

  { name: 'Git', icon: <FaGit />, type: 'tool' },
  { name: 'GitHub', icon: <FaGithub />, type: 'tool' },
  { name: 'Figma', icon: <FaFigma />, type: 'tool' },

  { name: 'Adobe Premiere', icon: <SiAdobepremierepro />, type: 'design' },
  { name: 'Adobe Photoshop', icon: <SiAdobephotoshop />, type: 'design' },
  { name: 'Avid Media Composer', icon: <SiAdobepremierepro />, type: 'design' }, // Puedes cambiar si quieres
];

const types = {
  frontend: 'Frontend',
  backend: 'Backend',
  tool: 'Herramientas',
  design: 'Diseño/Edición'
};

export default function About() {
  return (
    <section className="container py-5">
      <h2 className="monster-green mb-4">Sobre mí</h2>
      <div className="bg-dark p-4 rounded shadow">
        <p>
          ¡Hola! Soy <span className="monster-green fw-bold">Marco Pastene Santander</span>, desarrollador web full stack con pasión por el diseño y la tecnología.
        </p>
        <h4 className="monster-green mt-4 mb-2">Skills</h4>
        <div className="row">
          {Object.entries(types).map(([key, label]) => (
            <div className="col-md-6 mb-3" key={key}>
              <h5 className="monster-green mb-2">{label}</h5>
              <div className="d-flex flex-wrap gap-2">
                {skills.filter(skill => skill.type === key).map((skill, idx) => (
                  <span className="skill-chip-monster" key={skill.name}>
                    <span className="me-1">{skill.icon}</span> {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
