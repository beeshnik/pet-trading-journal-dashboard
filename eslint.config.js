import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        rules: {
            "prettier/prettier": "off",

            "object-curly-newline": [
                "tip",
                {
                    ImportDeclaration: { multiline: true, minProperties: 2 },
                    ExportDeclaration: { multiline: true, minProperties: 2 },
                },
            ],

            "object-curly-spacing": ["tip", "always"],
        },
    },
]);
