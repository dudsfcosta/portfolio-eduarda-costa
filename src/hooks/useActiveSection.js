import { useEffect, useState } from 'react';

/**
 * Observa as seções da página e devolve o id da que está em foco,
 * para a Navbar destacar o link ativo (IntersectionObserver).
 */
export function useActiveSection(ids) {
  const [ativo, setAtivo] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) setAtivo(entrada.target.id);
        });
      },
      // faixa central da viewport define a seção "ativa"
      { rootMargin: '-40% 0px -55% 0px' }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return ativo;
}
