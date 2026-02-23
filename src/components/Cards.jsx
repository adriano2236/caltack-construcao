import "./cards.css";

function Cards() {
  return (
    <section className="cards">
      <a className="card" href="/servicos">
        <img src="/obra4.jpg" alt="Serviços" loading="lazy" />
        <h3>Nossos Serviços</h3>
      </a>

      <a className="card" href="/quem-somos">
        <img src="/obra5.jpg" alt="Quem Somos" loading="lazy" />
        <h3>Quem Somos</h3>
      </a>

      <a className="card" href="/diferencial">
        <img src="/obra6.jpg" alt="Diferencial" loading="lazy" />
        <h3>Nosso Diferencial</h3>
      </a>
      <a className="card destaque" href="/trabalhos">
        <img src="/obra2.jpg" alt="Trabalhos" loading="lazy" />

        <div className="card-text">
          <h3>Projetos e Obras</h3>

          <p>
            Explore nossos projetos concluídos, obras em andamento e imóveis
            prontos para venda. Cada trabalho representa nossa evolução,
            qualidade de execução e compromisso com resultados reais.
          </p>

          <ul className="mini-lista">
            <li>✔ Obras já finalizadas</li>
            <li>✔ Projetos em andamento</li>
            <li>✔ Imóveis disponíveis para venda</li>
            <li>✔ Evolução dos nossos trabalhos</li>
          </ul>

          <span className="ver-mais">Ver projetos →</span>
        </div>
      </a>
    </section>
  );
}

export default Cards;
