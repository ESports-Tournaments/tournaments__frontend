const { configure, presets } = require('eslint-kit');

module.exports = configure({
  allowDebug: process.env.NODE_ENV !== 'production',

  presets: [
    presets.imports({
      sort: {
        // (optional) Add newline between import groups
        newline: true,
      },
      alias: {
        root: './src',
        paths: { '~': './' },
      },
    }),
    presets.node(),
    presets.prettier(),
    presets.typescript(),
    presets.react(),
  ],

  extend: {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      'import/no-default-export': 'off',
      'import/newline-after-import': 'warn',
    },
  },
});
