import { useState } from 'react';
import { EMAIL_CONTATO } from '../../data/contato';
import styles from './ContactForm.module.css';

const VAZIO = { nome: '', email: '', mensagem: '' };

// Formulário de contato: valida os campos e abre o cliente de e-mail
// com a mensagem pronta (sem backend — ideal para um portfólio estático).
export default function ContactForm() {
  const [form, setForm] = useState(VAZIO);
  const [enviado, setEnviado] = useState(false);

  const aoMudar = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setEnviado(false);
  };

  const aoEnviar = (e) => {
    e.preventDefault();
    const assunto = encodeURIComponent(`Contato via portfólio — ${form.nome}`);
    const corpo = encodeURIComponent(`${form.mensagem}\n\n— ${form.nome} (${form.email})`);
    window.location.href = `mailto:${EMAIL_CONTATO}?subject=${assunto}&body=${corpo}`;
    setEnviado(true);
  };

  return (
    <form className={styles.form} onSubmit={aoEnviar}>
      <div className={styles.linha}>
        <label className={styles.campo}>
          <span>Nome</span>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={aoMudar}
            placeholder="Seu nome"
            required
            minLength={2}
          />
        </label>
        <label className={styles.campo}>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={aoMudar}
            placeholder="voce@email.com"
            required
          />
        </label>
      </div>
      <label className={styles.campo}>
        <span>Mensagem</span>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={aoMudar}
          placeholder="Oi! Vi seu portfólio e gostaria de conversar sobre..."
          rows={5}
          required
          minLength={10}
        />
      </label>
      <button type="submit" className={styles.botao}>Enviar mensagem</button>
      {enviado && (
        <p className={styles.sucesso} role="status">
          ✅ Mensagem pronta! Seu cliente de e-mail foi aberto — é só enviar.
        </p>
      )}
    </form>
  );
}
