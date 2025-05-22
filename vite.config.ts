import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // <-- cette ligne est importante pour le déploiement
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
