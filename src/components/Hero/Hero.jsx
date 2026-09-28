import styles from './Hero.module.css';

// Página inicial: resumo profissional + chamadas para ação.
export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.orbe} aria-hidden="true" />
      <div className={styles.conteudo}>
        <img
          className={styles.avatar}
          src="https://github.com/dudsfcosta.png"
          alt="Foto de perfil de Eduarda Ferreira Costa"
        />
        <p className={styles.ola}>Olá, eu sou a</p>
        <h1 className={styles.nome}>Eduarda Ferreira Costa</h1>
        <p className={styles.cargo}>
          Desenvolvedora Front-End em formação <span aria-hidden="true">·</span> Ilustradora digital
        </p>
        <p className={styles.resumo}>
          Estudo desenvolvimento web na EBAC e transformo ideias em interfaces organizadas,
          responsivas e acessíveis. Venho do design e da escrita — e levo esse olhar criativo
          para cada componente que construo.
        </p>
        <div className={styles.ctas}>
          <a className={styles.primario} href="#projetos">Ver projetos</a>
          <a className={styles.secundario} href="#contato">Falar comigo</a>
        </div>
      </div>
    </section>
  );
}
