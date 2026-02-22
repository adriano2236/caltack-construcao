import { useNavigate } from "react-router-dom";
import "./pages.css";

function Diferencial() {
  const navigate = useNavigate();

  return (
    <div
      className="page-bg"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/obra6.jpg')",
      }}
    >
      <div className="page-content">
        <button onClick={() => navigate("/")}>← Voltar</button>

        <h1>Nosso Diferencial</h1>

        <p>
          Nosso diferencial está na qualidade do serviço, no compromisso com
          prazos e na transparência com o cliente durante todo o processo.
        </p>

        <p>
          Trabalhamos com materiais de qualidade, mão de obra especializada e
          foco total na satisfação do cliente.
        </p>
      </div>
    </div>
  );
}

export default Diferencial;
