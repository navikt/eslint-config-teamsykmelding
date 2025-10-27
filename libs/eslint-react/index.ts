import type { Config } from 'eslint/config'

export default [
    {
        rules: {
            'no-console': 'warn',
            'import/no-extraneous-dependencies': 'error',
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                },
            ],
            '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
            'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
        },
    },
] satisfies Config[]
