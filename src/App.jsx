import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sobre from './sections/Sobre';
import Projetos from './sections/Projetos';
import Habilidades from './sections/Habilidades';
import Contato from './sections/Contato';
import Footer from './components/Footer/Footer';
import { SECOES } from './data/secoes';

// O App só orquestra: cada seção vive em components/ ou sections/,
// e todo o conteúdo textual vem de data/ (fácil de atualizar).
export default function App() {
  return (
    <>
      <Navbar secoes={SECOES} />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Habilidades />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
