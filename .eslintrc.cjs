/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    env: {
      browser: true,
      commonjs: true,
      es6: true,
    },
    ignorePatterns: ['!**/.server', '!**/.client'],
  
    // Base config
    extends: [
      'eslint:recommended',
      'plugin:unicorn/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
    ],
  
    plugins: ['import', 'simple-import-sort'],
  
    settings: {
      'import/internal-regex': '^~/',
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            e2e: true,
            'remix.env.d': true,
          },
          replacements: {
            env: false,
            props: false,
            ref: false,
            params: false,
          },
        },
      ],
    },
  
    overrides: [
      // React
      {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: ['react', 'jsx-a11y'],
        extends: [
          'plugin:react/recommended',
          'plugin:react/jsx-runtime',
          'plugin:react-hooks/recommended',
          'plugin:jsx-a11y/recommended',
        ],
        settings: {
          react: {
            version: 'detect',
          },
          formComponents: ['Form'],
          linkComponents: [
            { name: 'Link', linkAttribute: 'to' },
            { name: 'NavLink', linkAttribute: 'to' },
          ],
          'import/resolver': {
            typescript: {},
          },
        },
        rules: {
          'react/prop-types': 'off',
        },
      },
  
      // Typescript
      {
        files: ['**/*.{ts,tsx}'],
        plugins: ['@typescript-eslint', 'import'],
        parser: '@typescript-eslint/parser',
        settings: {
          'import/internal-regex': '^~/',
          'import/resolver': {
            node: {
              extensions: ['.ts', '.tsx'],
            },
            typescript: {
              alwaysTryTypes: true,
            },
          },
        },
        extends: [
          'plugin:@typescript-eslint/recommended',
          'plugin:import/recommended',
          'plugin:import/typescript',
        ],
      },
  
      // Node
      {
        files: ['.eslintrc.cjs'],
        env: {
          node: true,
        },
      },
    ]
  };