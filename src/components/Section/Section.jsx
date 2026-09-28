import styles from './Section.module.css';

// Wrapper reutilizável de seção: id (âncora), título e subtítulo padronizados.
export default function Section({ id, titulo, subtitulo, children }) {
  return (
    <section id={id} className={styles.secao}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>{titulo}</h2>
        {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
        {children}
      </div>
    </section>
  );
}
