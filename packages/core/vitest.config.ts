import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Enable TypeScript support
    typecheck: {
      enabled: true,
      tsconfig: './tsconfig.json',
    },

    // Test environment
    environment: 'node',

    // Configure coverage
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      exclude: ['node_modules/**', 'dist/**', '**/*.d.ts', 'tests/**'],
    },

    // Configure includes/excludes
    include: ['tests/**/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules/**', 'dist/**'],
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
