/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import suidPlugin from '@suid/vite-plugin';
import { resolve, join } from 'path';

export default defineConfig({
  plugins: [suidPlugin(), solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@theme': resolve(__dirname, join('./src/theme')),
      '@app': resolve(__dirname, join('./src/app')),
      '@lib': resolve(__dirname, join('./src/lib')),
      '@modules': resolve(__dirname, join('./src/modules')),
    },
  },
});
