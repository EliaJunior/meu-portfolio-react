import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container">
        <h2 className="section-title section-title-light">Contato</h2>
        <div className="footer-content">
          <div className="footer-info">
            <p>Interessado em trabalhar juntos? Entre em contato!</p>
            <ul className="contact-list">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:engeliascunha@gmail.com">
                  engeliascunha@gmail.com
                </a>
              </li>
              <li>
                <strong>Telefone:</strong>{" "}
                <a href="tel:+5586999930217">(86) 99993-0217</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/EliaJunior"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/elias-junior-b45335174/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Elias Junior Cunha. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
