module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
    extends: ['eslint:recommended'],
    parserOptions: { ecmaVersion: 12 },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            settings: { react: { version: 'detect' } },
            env: {
                browser: true,
                node: true,
                es6: true,
            },
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                'plugin:jsx-a11y/recommended',
                'plugin:prettier/recommended',
            ],
            rules: {
                'react/prop-types': 'off',
                'react/react-in-jsx-scope': 'off',
                'jsx-a11y/anchor-is-valid': 'off',
                '@typescript-eslint/no-unused-vars': ['error'],
                '@typescript-eslint/explicit-function-return-type': [
                    'warn',
                    {
                        allowExpressions: true,
                        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                    },
                ],
                'prettier/prettier': ['error', { 'endOfLine': 'auto' }, { usePrettierrc: true }],
            },
        },
    ],
};
