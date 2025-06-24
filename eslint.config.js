import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
  {
    ignores: [".astro/*", "public/*"],
  },
];
