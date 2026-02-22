import { useNavigate } from "react-router-dom";
import "./Pages.css";

function QuemSomos() {
  const navigate = useNavigate();

  return (
    <div className="page-bg" style={{ backgroundImage: "url('/obra5.jpg')" }}>
      <div className="page-content">
        <button onClick={() => navigate("/")}>← Voltar</button>

        <h1>Quem Somos</h1>

        <p>
          Somos uma empresa dedicada à construção civil, com foco em qualidade,
          confiança e compromisso com nossos clientes.
        </p>

        <p>
          Nossa trajetória é marcada por trabalho sério, evolução constante e
          projetos realizados com responsabilidade e profissionalismo.
        </p>
      </div>
    </div>
  );
}

export default QuemSomos;
