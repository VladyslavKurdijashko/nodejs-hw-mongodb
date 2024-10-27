import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,

  {
    "parser": "@babel/eslint-parser",
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2020,
      "requireConfigFile": false
    }
  }
];
