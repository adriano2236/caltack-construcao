import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Caltack Construtora</h3>
          <p className="footer-desc">
            Construindo com qualidade, responsabilidade e compromisso.
          </p>
        </div>

        <div className="footer-info">
          <a className="contato-item" href="tel:+5554999999999">
            <span className="icon">📞</span>
            <span>(54) 99999-9999</span>
          </a>

          <a className="contato-item" href="mailto:contato@caltack.com">
            <span className="icon">✉️</span>
            <span>contato@caltack.com</span>
          </a>

          <div className="contato-item">
            <span className="icon">📍</span>
            <span>Passo Fundo - RS</span>
          </div>
        </div>

        <div className="social">
          <a href="https://wa.me/5554999999999" target="_blank">
            <img src="/icon-whatsapp.png" alt="WhatsApp" />
          </a>
          <a href="#">
            <img src="/icon-instagram.png" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/icon-facebook.png" alt="Facebook" />
          </a>
        </div>
      </div>

      <p className="copy">© {new Date().getFullYear()} Caltack Construtora</p>
    </footer>
  );
}

export default Footer;
