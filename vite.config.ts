import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv, PluginOption } from 'vite';
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
      visualizer({
        open: env.ANALYZE === 'true',
        template: 'treemap', // or sunburst
        gzipSize: true,
        brotliSize: true,
        filename: 'analyse.html', // will be saved in project's root
      }) as PluginOption,
    ],
  };
});
