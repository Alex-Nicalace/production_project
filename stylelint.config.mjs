/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  overrides: [
    {
      files: ['**/*.module.scss'],
      rules: {
        'selector-class-pattern': [
          '^[a-z]([a-zA-Z0-9]+)?$', // camelCase
          {
            message: 'Expected class selector to be camelCase in modules',
          },
        ],
      },
    },
  ],
};
