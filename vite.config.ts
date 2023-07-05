import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv, PluginOption } from 'vite';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      __IS_DEV__: mode === 'development',
      __API_DOMAIN__: JSON.stringify(env.API_DOMAIN),
    },

    plugins: [
      react(),
      tsconfigPaths(),
      ViteWebfontDownload([
        'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
      ]),
      visualizer({
        open: env.ANALYZE === 'true',
        template: 'treemap', // or sunburst
        gzipSize: true,
        brotliSize: true,
        filename: 'analyse.html', // will be saved in project's root
      }) as PluginOption,
    ],

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "./src/styles/theme.scss";
        `,
        },
      },
    },
  };
});
