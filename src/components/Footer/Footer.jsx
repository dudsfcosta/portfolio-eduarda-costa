import { LINKS, LOCALIZACAO } from '../../data/contato';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {LINKS.map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
            <span aria-hidden="true">{link.icone}</span> {link.label}
          </a>
        ))}
      </div>
      <p className={styles.nota}>
        {LOCALIZACAO} · Feito com React + Vite · © {new Date().getFullYear()} Eduarda Ferreira Costa
      </p>
    </footer>
  );
}
