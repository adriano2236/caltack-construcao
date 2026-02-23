import { useNavigate } from "react-router-dom";
import "./pages.css";

function Servicos() {
  const navigate = useNavigate();

  return (
    <div className="page-bg" style={{ backgroundImage: "url('/obra4.jpg')" }}>
      <div className="page-content">
        <button onClick={() => navigate("/")}>← Voltar</button>

        <h1>Nossos Serviços</h1>

        <p>
          Trabalhamos com construção, reformas, acabamento e projetos completos.
          Nosso foco é qualidade, segurança e satisfação do cliente, garantindo
          resultados duradouros e eficientes.
        </p>
      </div>
    </div>
  );
}

export default Servicos;
