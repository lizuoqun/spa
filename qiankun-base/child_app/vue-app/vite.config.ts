import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
  base: './vue-app',
  plugins: [vue(), qiankun('vue-app', {
    useDevMode: true
  })],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    port: 3001,
    cors: true,
    origin: 'http://localhost:3001'
  }
});
