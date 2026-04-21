/**
 * Repository ESLint flat config.
 * Extends the published package in `src/index.js` with repo-only overrides.
 */
import base from './src/index.js';

export default [
  {
    ignores: ['**/node_modules/**', 'pnpm-lock.yaml', 'package-lock.json', '**/.git/**'],
  },
  ...base,
  {
    files: ['src/**/*.{js,jsx,ts,tsx}', 'eslint.config.js'],
    settings: {
      react: { version: '18.3' },
    },
  },
  {
    files: ['src/**/*.test.js'],
    rules: {
      'security/detect-non-literal-fs-filename': 'off',
    },
  },
  {
    files: ['scripts/**/*.cjs'],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
        __filename: 'readonly',
        console: 'readonly',
        exports: 'readonly',
        module: 'readonly',
        process: 'readonly',
        require: 'readonly',
      },
      sourceType: 'script',
    },
    rules: {
      'security/detect-non-literal-fs-filename': 'off',
      'security/detect-unsafe-regex': 'off',
    },
  },
];
