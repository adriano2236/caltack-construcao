import { useNavigate } from "react-router-dom";
import "./pages.css";

function Trabalhos() {
  const navigate = useNavigate();

  return (
    <div
      className="page-bg trabalhos-section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/obra2.jpg')",
      }}
    >
      <div className="page-content">
        <button onClick={() => navigate("/")}>← Voltar</button>

        <h1>Nossos Trabalhos</h1>

        <div className="story left">
          <h3>Construímos mais que obras. Construímos confiança.</h3>
          <p>
            Cada projeto começa com planejamento estratégico, passa por execução
            rigorosa e termina com entrega impecável. Não entregamos apenas
            estruturas — entregamos segurança, valorização e tranquilidade para
            sua família.
          </p>
        </div>

        <div className="obras">
          <div className="obra">
            <img src="/obra1.jpg" alt="" loading="lazy" />
          </div>

          <div className="obra">
            <img src="/obra2.jpg" alt="" loading="lazy" />
          </div>

          <div className="obra">
            <img src="/obra3.jpg" alt="" loading="lazy" />
          </div>

          <div className="obra">
            <img src="/obra4.jpg" alt="" loading="lazy" />
          </div>

          <div className="obra">
            <img src="/obra5.jpg" alt="" loading="lazy" />
          </div>

          <div className="obra">
            <img src="/obra6.jpg" alt="" loading="lazy" />
          </div>
        </div>

        <h2>Imóveis para Venda</h2>
        <p>Em breve novos projetos disponíveis para comercialização.</p>
      </div>
      <div className="story right">
        <h3>Seu sonho merece padrão elevado.</h3>
        <p>
          Trabalhamos com compromisso real, prazos cumpridos e acabamento de
          alto nível. Nossa missão é transformar sua ideia em um projeto sólido,
          duradouro e valorizado no mercado. Fale conosco e comece hoje mesmo.
        </p>
      </div>
    </div>
  );
}

export default Trabalhos;
