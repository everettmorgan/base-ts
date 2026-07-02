import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'es2023',
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
});
