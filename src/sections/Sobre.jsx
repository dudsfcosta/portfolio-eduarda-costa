import Section from '../components/Section/Section';
import { LINKS, LOCALIZACAO } from '../data/contato';
import styles from './Sobre.module.css';

export default function Sobre() {
  return (
    <Section id="sobre" titulo="Sobre mim">
      <div className={styles.grid}>
        <img
          className={styles.foto}
          src="https://github.com/dudsfcosta.png"
          alt="Foto de Eduarda Ferreira Costa"
        />
        <div className={styles.texto}>
          <p>
            Sou desenvolvedora front-end em formação pela{' '}
            <a href="https://ebaconline.com.br" target="_blank" rel="noreferrer">EBAC</a> e
            freelancer na <strong>Khaosphaneia</strong>, onde assino como <em>Void</em>:
            ilustração digital e escrita.
          </p>
          <p>
            Venho da área criativa e carrego esse olhar para o código: gosto de interfaces
            bem organizadas, acessíveis e com personalidade. Atualmente estudo React,
            Next.js e arquitetura de micro-frontends — cada projeto do curso está
            versionado no meu GitHub.
          </p>
          <ul className={styles.fatos}>
            <li>📍 {LOCALIZACAO}</li>
            {LINKS.map((link) => (
              <li key={link.label}>
                {link.icone} <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
