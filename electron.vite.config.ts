import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import UnoCSS from 'unocss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@/lib': resolve('src/main/lib'),
        '@shared': resolve('src/shared'),
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    assetsInclude: 'src/renderer/assets/**',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
        '@/hooks': resolve('src/renderer/src/hooks'),
        '@/assets': resolve('src/rederer/src/assets'),
        '@/store': resolve('src/rederer/src/store'),
        '@/components': resolve('src/rederer/src/components'),
        '@/mocks': resolve('src/rederer/src/mocks'),
      },
    },
    plugins: [UnoCSS(), react()],
  },
});
