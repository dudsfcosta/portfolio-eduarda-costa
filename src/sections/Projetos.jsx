import Section from '../components/Section/Section';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import { projetos } from '../data/projetos';
import styles from './Projetos.module.css';

export default function Projetos() {
  return (
    <Section
      id="projetos"
      titulo="Projetos"
      subtitulo="Uma seleção dos projetos que construí ao longo do curso — cada um explorando tecnologias e desafios diferentes."
    >
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </Section>
  );
}
