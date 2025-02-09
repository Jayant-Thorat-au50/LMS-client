import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [nodePolyfills()],
  resolve: {
    alias: {
      // alias for crypto
      crypto: 'crypto-browserify',
    },
  },
});
