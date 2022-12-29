// eslint-disable-next-line
import vue from '@vitejs/plugin-vue';
import path from 'path';

const buildFolder = process.env.NODE_ENV === 'production' ? 'packages' : 'build';

export default {
  plugins: [vue()],
  root: './',
  base: '',
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    assetsInlineLimit: 0,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      'xui/lite/bundle': path.resolve(
        __dirname,
        `../../${buildFolder}/core/xui-lite-bundle.esm.js`,
      ),
      'xui/css/bundle': path.resolve(__dirname, `../../${buildFolder}/core/xui-bundle.css`),
      'xui/lite': path.resolve(__dirname, `../../${buildFolder}/core/xui-lite.esm.js`),
      'xui-vue': path.resolve(__dirname, `../../${buildFolder}/vue`),
    },
  },
};
