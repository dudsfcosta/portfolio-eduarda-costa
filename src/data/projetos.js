// Curadoria de projetos do curso — cada capa é um gradiente temático
// com emoji; para usar screenshots reais, adicione `imagem` ao projeto
// e o ProjectCard passa a exibi-la no lugar da capa.
export const projetos = [
  {
    id: 'sistema-pedidos',
    nome: 'Sistema de Pedidos em Micro-frontends',
    emoji: '🍽️',
    capa: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
    descricao:
      'Sistema dividido em três aplicações independentes (container, cardápio e pedido), integradas via Webpack Module Federation. O container consome os micros com React.lazy + Suspense e a comunicação acontece por eventos globais do navegador.',
    tecnologias: ['Next.js 13', 'React 18', 'Module Federation', 'Eventos globais'],
    repo: 'https://github.com/dudsfcosta/sistema-pedidos-micro-frontends',
  },
  {
    id: 'todo-recoil',
    nome: 'Todo List com Recoil',
    emoji: '✅',
    capa: 'linear-gradient(135deg, #059669 0%, #0ea5e9 100%)',
    descricao:
      'Lista de tarefas com estado global gerenciado pelo Recoil, explorando átomos e seletores para compartilhar e derivar dados entre componentes sem prop drilling.',
    tecnologias: ['React', 'Recoil', 'JavaScript'],
    repo: 'https://github.com/dudsfcosta/todo-list-recoil',
  },
  {
    id: 'catalogo-produtos',
    nome: 'Catálogo de Produtos',
    emoji: '🛍️',
    capa: 'linear-gradient(135deg, #d97706 0%, #dc2626 100%)',
    descricao:
      'Catálogo de produtos construído com componentes reutilizáveis e hooks, focando em componentização, props e boas práticas de organização de código.',
    tecnologias: ['React', 'Hooks', 'Componentização'],
    repo: 'https://github.com/dudsfcosta/catalogo-produtos-react',
  },
  {
    id: 'diario-de-bordo',
    nome: 'Diário de Bordo (PWA)',
    emoji: '📓',
    capa: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
    descricao:
      'Progressive Web App de anotações otimizado para performance e acessibilidade: após otimizações (imagens WebP, minificação, ARIA), passou a cravar 100/100/100/100 no Lighthouse.',
    tecnologias: ['PWA', 'Service Worker', 'Web Vitals'],
    repo: 'https://github.com/dudsfcosta/diario-de-bordo',
  },
  {
    id: 'petshop',
    nome: 'Petshop Amor Animal',
    emoji: '🐾',
    capa: 'linear-gradient(135deg, #ca8a04 0%, #16a34a 100%)',
    descricao:
      'Landing page para um petshop com layout responsivo em mobile e desktop, aplicando HTML semântico, CSS moderno e hierarquia visual.',
    tecnologias: ['HTML5', 'CSS3', 'Responsividade'],
    repo: 'https://github.com/dudsfcosta/petshop-amor-animal',
  },
];
