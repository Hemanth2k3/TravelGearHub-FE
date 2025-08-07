import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import crypto from 'node:crypto';

// Polyfill Web Crypto API for Vite
if (!globalThis.crypto) {
  globalThis.crypto = {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
    subtle: crypto.webcrypto.subtle,
    randomUUID: crypto.randomUUID,
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
