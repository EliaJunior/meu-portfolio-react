import "./ProjetoCard.css";

export default function ProjetoCard({ projeto }) {
  return (
    <article className="projeto-card" data-categoria={projeto.categoria}>
      <div className="projeto-img-wrapper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={projeto.imagem}
          alt={projeto.titulo}
          loading="lazy"
        />
      </div>
      <div className="projeto-info">
        <h3>{projeto.titulo}</h3>
        <p>{projeto.descricao}</p>
        <div className="projeto-techs">
          {projeto.tecnologias.map((tech) => (
            <span key={tech} className="projeto-tech">
              {tech}
            </span>
          ))}
        </div>
        <div className="projeto-actions">
          {projeto.link ? (
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm"
            >
              Visitar &#8599;
            </a>
          ) : (
            <span className="btn btn-sm btn-disabled">Projeto privado</span>
          )}
        </div>
      </div>
    </article>
  );
}
