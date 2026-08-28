import { defineConfig } from 'vite';

export default defineConfig({
  base: '/gauntlet-fps/',
  server: { port: 5173, open: false },
  build: { target: 'esnext', outDir: 'dist' }
});
