module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "prettier"],
  plugins: [
    "prettier",
    "testing-library",
    "postcss-modules",
    "react-hooks",
    "import",
  ],
  rules: {
    "no-console": "warn",
    "prettier/prettier": "warn",
    "import/order": ["warn", { "newlines-between": "always" }],
    "react-hooks/exhaustive-deps": [
      "warn",
      { additionalHooks: "(useUpdateBreadcrumbs)" },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true },
    ],
    "postcss-modules/no-undef-class": "error",
    "postcss-modules/no-unused-class": "warn",
  },
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
      rules: {
        "testing-library/no-debugging-utils": "warn",
      },
    },
  ],
  settings: {
    "postcss-modules": {
      exclude: ["**/node_modules/**/*", "**/global.css"],
    },
  },
};
