module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended' // Make sure this is always the last element in the array.
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'simple-import-sort', 'import', 'jsx-a11y'],
  rules: {
    /**
     * @description react-refresh rules
     */
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    /**
     * @description simple-import-sort rules
     */
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    /**
     * @description unicorn rules
     */
    'unicorn/filename-case': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prevent-abbreviations': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true
    }
  }
};
