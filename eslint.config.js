import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import cypress from "eslint-plugin-cypress"

export default [
    {ignores: ["dist"]},
    {
        files: ["**/*.{js,jsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.jest,
                ...cypress.globals,
                "cy": true
            },
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: {jsx: true},
                sourceType: "module"
            }
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "cypress": cypress
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]"}],
            "react-refresh/only-export-components": ["warn", {allowConstantExport: true}]
        }
    }
];


