import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: [ js, 'react', 'prettier', 'react-hooks' ], extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs,jsx}"], rules: {'prettier/prettier': 'error', 'react/jsx-filename-extension': 0, 'import/prefer-default-export': 0,  'react-hooks/rules-of-hooks': 'error', 
    'react-hooks/exhaustive-deps': 'warn'}, extends: ['prettier', 'prettier/react'], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended, 
]);