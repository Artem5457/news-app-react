import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default [
  { ignores: [ 'dist' ] },
  {
    files: [ '**/*.{js,jsx}' ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module'
      }
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'semi': [ 'error', 'always', { omitLastInOneLineBlock: false } ],
      'comma-dangle': [ 'error', 'never' ],
      'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],
      'react/prop-types': [ 0 ],
      'quotes': [ 'error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true } ],
      'no-unused-vars': [ 'error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false } ],
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error'
    }
  }
];
