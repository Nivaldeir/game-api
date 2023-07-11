module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: "airbnb-base",
  parse: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugin: ["@typescript-eslint", "eslint-plugin-import-helpers"],
  rules: {},
};
