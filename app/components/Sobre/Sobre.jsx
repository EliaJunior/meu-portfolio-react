import Image from "next/image";
import "./Sobre.css";

export default function Sobre() {
  const skillGroups = [
    {
      titulo: "Frontend",
      skills: [
        "React",
        "Next.js",
        "Angular",
        "TypeScript",
        "JavaScript",
        "CSS/SASS",
        "HTML5",
      ],
    },
    {
      titulo: "Backend / Linguagens",
      skills: [
        "Node.js",
        "Express",
        "Python",
        "SQL",
        "NoSQL",
        "VBA",
        "C#",
        "MongoDB",
      ],
    },
    {
      titulo: "Ferramentas",
      skills: ["Git", "Docker", "Figma", "Jest"],
    },
  ];

  return (
    <section id="sobre" className="sobre-section">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <div className="sobre-content">
          <div className="sobre-avatar">
            <Image
              src="/elias.jpg"
              alt="Elias Junior"
              width={120}
              height={120}
              className="avatar-foto"
              priority
            />
          </div>
          <div className="sobre-texto">
            <p>
              Sou <strong>Elias Junior</strong>, Desenvolvedor Full Stack
              e Engenheiro Civil. Atuo com desenvolvimento web utilizando React,
              Next.js, Node.js e TypeScript, além de soluções desktop em VBA com
              integração a bancos de dados SQLite e MySQL.
            </p>
            <p>
              Tenho experiência em projetos de engenharia, sistemas de gestão
              empresarial e aplicações web, sempre buscando entregar soluções que
              combinam eficiência técnica e usabilidade.
            </p>
            <div className="skills-container">
              <h3>Habilidades</h3>
              <div className="skills-grid">
                {skillGroups.map((group) => (
                  <div key={group.titulo} className="skill-group">
                    <h4>{group.titulo}</h4>
                    <div className="skill-tags">
                      {group.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
