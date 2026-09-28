import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' gera caminhos relativos: o build funciona em qualquer domínio
// ou subcaminho (Vercel, Netlify, GitHub Pages...).
export default defineConfig({
  base: './',
  plugins: [react()],
});
