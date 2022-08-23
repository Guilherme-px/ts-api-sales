module.exports = {
    env: {
        es2021: true,
        node: true,
    },
    extends: [
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    plugins: ['@typescript-eslint', 'prettier'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': 'error',
    },
};
