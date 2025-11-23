import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // --- Custom rule overrides ---
  {
    rules: {
      "no-unused-vars": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-console": "off",
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off"
    }
  },

  // --- Ignores ---
  globalIgnores([
    // Defaults from eslint-config-next
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Optional extras you may want:
    "**/*.config.js",
    "**/*.config.cjs",
    "**/*.config.mjs"
  ])
]);
