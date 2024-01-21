module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 90,
  tabWidth: 2,
  endOfLine: 'auto',
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
  ],
};
