import Section from '../components/Section/Section';
import SkillGroup from '../components/SkillGroup/SkillGroup';
import { habilidades } from '../data/habilidades';
import styles from './Habilidades.module.css';

export default function Habilidades() {
  return (
    <Section
      id="habilidades"
      titulo="Habilidades"
      subtitulo="Tecnologias e competências que venho construindo no curso e nos projetos."
    >
      <div className={styles.grid}>
        {habilidades.map((h) => (
          <SkillGroup key={h.grupo} grupo={h.grupo} itens={h.itens} />
        ))}
      </div>
    </Section>
  );
}
