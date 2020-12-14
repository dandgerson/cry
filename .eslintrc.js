const disableA11y = () => Object.keys(require('eslint-plugin-jsx-a11y').rules)
  .reduce((acc, current) => ({
    ...acc,
    [`jsx-a11y/${current}`]: 'off',
  }), {})

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  rules: {
    ...disableA11y(),
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': [2, 'as-needed', { 'requireForBlockBody': true }],
    'jsx-quotes': [2, 'prefer-single'],
  },
  settings: {
    // 'import/resolver': 'webpack',
    'import/resolver': {
      node: {
        paths: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
