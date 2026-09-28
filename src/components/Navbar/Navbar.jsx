import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './Navbar.module.css';

// Fixa no topo, com blur, e destaca a seção em foco (hook useActiveSection).
export default function Navbar({ secoes }) {
  const ativo = useActiveSection(secoes.map((s) => s.id));

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a className={styles.logo} href="#inicio">
          <span aria-hidden="true"></span> Eduarda<span className={styles.ponto}>.</span>
        </a>
        <ul className={styles.links}>
          {secoes.map((secao) => (
            <li key={secao.id}>
              <a
                href={`#${secao.id}`}
                className={ativo === secao.id ? styles.ativo : undefined}
                aria-current={ativo === secao.id ? 'true' : undefined}
              >
                {secao.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
