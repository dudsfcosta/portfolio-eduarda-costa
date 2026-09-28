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
            Sou desenvolvedora Full-Stack em formação pela{' '}
            <a href="https://ebaconline.com.br" target="_blank" rel="noreferrer">EBAC</a>,
            designer e ilustradora digital freelancer.
          </p>
          <p>
            Venho da área criativa e carrego esse olhar para o código: procuro desenvolver
            interfaces bem organizadas, acessíveis e com personalidade. Atualmente estudo
            React, Next.js e arquitetura de micro-frontends — cada projeto do curso está
            versionado no meu GitHub. Meu próximo passo é o estudo de Python.
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
