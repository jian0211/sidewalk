module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
    es2021: true,
  },
  plugins: ['import', 'react', '@typescript-eslint', 'prettier', '@stylexjs'],
  extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:storybook/recommended'],
  rules: {
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@stylexjs/valid-styles': 'error',
    'react/prop-types': 'off',
    'import/namespace': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.{ts,tsx}'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: { alwaysTryTypes: true },
    },
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
