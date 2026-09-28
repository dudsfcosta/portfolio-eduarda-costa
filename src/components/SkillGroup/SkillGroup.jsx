import styles from './SkillGroup.module.css';

// Grupo de habilidades: título + nuvem de tags.
export default function SkillGroup({ grupo, itens }) {
  return (
    <div className={styles.grupo}>
      <h3 className={styles.titulo}>{grupo}</h3>
      <ul className={styles.nuvem}>
        {itens.map((item) => (
          <li key={item} className={styles.item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
