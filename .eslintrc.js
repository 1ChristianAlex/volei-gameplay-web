// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        parser: 'typescript',
        tabWidth: 2,
        printWidth: 90,
      },
    ],
    'no-console': 1,
    'no-use-before-define': 'off',
    'no-undef': 'error',
    'no-empty': 'error',
    'no-var': 'error',
    'no-nested-ternary': 'error',
  },
};
