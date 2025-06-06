import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Общие настройки для ВСЕХ файлов
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // ТОЛЬКО JavaScript
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    rules: {
      'no-unused-vars': 'warn',
    },
  },

  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  // ТОЛЬКО TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // ТОЛЬКО React (JSX/TSX)
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Отключаем import React from 'react';
    },
  },
]);
