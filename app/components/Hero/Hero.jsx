import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Olá, eu sou</p>
        <h1>Elias Junior</h1>
        <p className="hero-title">Desenvolvedor Full Stack</p>
        <p className="hero-description">
          Especializado em criar soluções modernas e eficientes para o seu
          negócio. Apaixonado por engenharia e resolução de problemas.
        </p>
        <div className="hero-techs">
          {["React", "Next.Js", "NodeJS", "VBA"].map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        <div className="hero-buttons">
          <a href="#projetos" className="btn btn-primary">
            Ver Projetos
          </a>
          <a href="#contato" className="btn btn-secondary">
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}
