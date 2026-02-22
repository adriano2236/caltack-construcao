import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <h2 className="logo">Empresa</h2>

      <div className="menuIcon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {open && (
        <nav className="menu">
          <Link to="/">Início</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/quem-somos">Quem Somos</Link>
          <Link to="/diferencial">Diferencial</Link>
          <Link to="/trabalhos">Trabalhos</Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
