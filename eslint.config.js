const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');

module.exports = [
    // Base configuration for all files
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y,
            import: importPlugin,
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx'],
                },
            },
        },
        rules: {
            // Base JavaScript rules
            ...js.configs.recommended.rules,

            // React rules
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,

            // JSX A11y rules
            ...jsxA11y.configs.recommended.rules,

            // Import rules
            ...importPlugin.configs.errors.rules,

            // Custom rules
            'react/prop-types': 'off',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/self-closing-comp': 'warn',
            'react/jsx-uses-vars': 'error',
            'react/no-unescaped-entities': 'warn',
            'react/no-unknown-property': 'warn',

            // Import rules
            'import/no-unresolved': 'error',
            'import/named': 'error',
            'import/default': 'error',
            'import/namespace': 'error',
            'import/no-duplicates': 'error',

            // General code quality
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'no-debugger': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'prefer-template': 'error',

            // JSX specific
            'jsx-a11y/alt-text': 'warn',
            'jsx-a11y/anchor-has-content': 'warn',
            'jsx-a11y/anchor-is-valid': 'warn',
            'jsx-a11y/aria-props': 'warn',
            'jsx-a11y/aria-proptypes': 'warn',
            'jsx-a11y/aria-unsupported-elements': 'warn',
            'jsx-a11y/role-has-required-aria-props': 'warn',
            'jsx-a11y/role-supports-aria-props': 'warn',
        },
    },

    // Configuration for test files
    {
        files: ['**/*.test.{js,jsx}', '**/*.spec.{js,jsx}', '**/__tests__/**/*.{js,jsx}'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        rules: {
            'no-console': 'off',
            'react/display-name': 'off',
        },
    },

    // Configuration for configuration files
    {
        files: ['*.config.js', '*.config.mjs'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
]; 