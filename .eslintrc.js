module.exports = {
  extends: ['react-app', 'plugin:jsx-a11y/recommended', 'prettier', 'plugin:jest/recommended'],
  plugins: ['jsx-a11y', 'prettier', 'jest'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'prettier/prettier': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-console': 'warn',
  },
};
