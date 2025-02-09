import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      // alias for crypto
      crypto: 'crypto-browserify',
    },
  },
});
