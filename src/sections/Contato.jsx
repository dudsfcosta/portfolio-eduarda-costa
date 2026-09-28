import Section from '../components/Section/Section';
import ContactForm from '../components/ContactForm/ContactForm';
import { LINKS, LOCALIZACAO } from '../data/contato';
import styles from './Contato.module.css';

export default function Contato() {
  return (
    <Section
      id="contato"
      titulo="Contato"
      subtitulo={`Vamos conversar? Me chame pelo formulário ou encontre-me em ${LOCALIZACAO}.`}
    >
      <div className={styles.grid}>
        <ContactForm />
        <ul className={styles.links}>
          {LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noreferrer">
                <span aria-hidden="true">{link.icone}</span> {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
