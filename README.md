# 🌌 Portfólio — Eduarda Ferreira Costa

Portfólio online desenvolvido em **React** como atividade final do curso de Front-End da [EBAC](https://ebaconline.com.br) — reunindo projetos, habilidades e formas de contato em uma vitrine profissional.

🔗 **Acesse o portfólio publicado:** https://dudsfcosta.github.io/portfolio-eduarda-costa/

## 🚀 Como rodar localmente

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

Para gerar a versão de produção: `npm run build` (saída em `dist/`).

## 🗂️ Projetos apresentados

| Projeto | Tecnologias | Repositório |
|---|---|---|
| Sistema de Pedidos em Micro-frontends | Next.js 13, Module Federation, eventos globais | [sistema-pedidos-micro-frontends](https://github.com/dudsfcosta/sistema-pedidos-micro-frontends) |
| Todo List com Recoil | React, Recoil (estado global) | [todo-list-recoil](https://github.com/dudsfcosta/todo-list-recoil) |
| Catálogo de Produtos | React, hooks, componentização | [catalogo-produtos-react](https://github.com/dudsfcosta/catalogo-produtos-react) |
| Diário de Bordo (PWA) | PWA, Service Worker, Lighthouse 100×4 | [diario-de-bordo](https://github.com/dudsfcosta/diario-de-bordo) |
| Petshop Amor Animal | HTML5, CSS3, responsividade | [petshop-amor-animal](https://github.com/dudsfcosta/petshop-amor-animal) |
| Chat Application | PHP, JavaScript | [php-chat-application](https://github.com/dudsfcosta/php-chat-application) |

## 🛠️ Tecnologias deste portfólio

- **React 18** — componentização, props e hooks (inclui hook customizado `useActiveSection` com IntersectionObserver para a navegação)
- **CSS Modules** — estilização modular e escopada por componente
- **Vite** — dev server e build de produção
- Deploy em produção na **Vercel**

## 📁 Estrutura

```
src/
├── components/   # componentes reutilizáveis (Navbar, Hero, Section, ProjectCard...)
├── sections/     # as quatro seções do portfólio (Sobre, Projetos, Habilidades, Contato)
├── data/         # conteúdo centralizado (projetos, habilidades, contato)
├── hooks/        # hooks customizados
└── styles/       # estilos globais e variáveis CSS
```

## ✨ Destaques de implementação

- Navegação por âncoras com **seção ativa destacada** via `IntersectionObserver`
- Layout **responsivo** (grid que colapsa em telas menores, menu adaptável)
- Formulário de contato com validação e abertura do cliente de e-mail
- Conteúdo centralizado em `src/data/` — atualizar projetos/habilidades não toca nos componentes

---
## 👩‍💻 Autora

Desenvolvido por **Eduarda Ferreira Costa** &copy; 2026.
