const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat();

module.exports = [
  ...compat.extends('airbnb-base'),

  { ignores: ['dist/**', 'node_modules/**', 'eslint.config.cjs'] },

  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      import: require('eslint-plugin-import'),
    },
    rules: {
      'no-console': 'off',
      'import/extensions': ['error', 'ignorePackages', { js: 'never' }],
    },
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.ts'] },
      },
    },
  },
  
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 5,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      import: require('eslint-plugin-import'),
    },
    rules: {
      'import/no-extraneous-dependencies': 'warn',
      'import/prefer-default-export': 'warn',
      'no-unused-vars': 'warn',
      "no-undef": "warn",
      "class-methods-use-this": "warn",
      "max-classes-per-file": "warn",
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'no-console': 'warn',
    },
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.ts'] },
      },
    },
  },
];
