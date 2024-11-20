import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: globals.browser,
    },
    ...tsPlugin.configs.recommended,
  },
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginReact.configs.flat.recommended,
  },
];
