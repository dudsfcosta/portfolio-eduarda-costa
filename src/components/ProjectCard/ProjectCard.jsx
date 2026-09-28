import styles from './ProjectCard.module.css';

// Card de projeto: capa (screenshot se houver `imagem`, senão gradiente
// temático), descrição, tags de tecnologia e link para o repositório.
export default function ProjectCard({ projeto }) {
  return (
    <article className={styles.card}>
      <div className={styles.capa} style={{ background: projeto.capa }} aria-hidden="true">
        {projeto.imagem
          ? <img src={projeto.imagem} alt={`Captura de tela do projeto ${projeto.nome}`} />
          : <span className={styles.emoji}>{projeto.emoji}</span>}
      </div>
      <div className={styles.corpo}>
        <h3 className={styles.nome}>{projeto.nome}</h3>
        <p className={styles.descricao}>{projeto.descricao}</p>
        <ul className={styles.tags} aria-label="Tecnologias utilizadas">
          {projeto.tecnologias.map((tec) => (
            <li key={tec} className={styles.tag}>{tec}</li>
          ))}
        </ul>
        <a
          className={styles.repo}
          href={projeto.repo}
          target="_blank"
          rel="noreferrer"
        >
          Ver repositório <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
