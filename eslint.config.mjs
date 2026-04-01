import { fixupConfigRules } from "@eslint/compat" // Импортируем утилиту
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import a11y from "eslint-plugin-jsx-a11y"
import prettierRecommended from "eslint-plugin-prettier/recommended" // Рекомендуемый способ подключения Prettier
import unicorn from "eslint-plugin-unicorn"
import { defineConfig, globalIgnores } from "eslint/config"

// Clean plugins by a11y
a11y.flatConfigs.strict.plugins = {}

const eslintConfig = defineConfig([
   ...fixupConfigRules(nextVitals),
   ...fixupConfigRules(nextTs),

   unicorn.configs.recommended,
   a11y.flatConfigs.strict,

   prettierRecommended,

   {
      rules: {
         "unicorn/prevent-abbreviations": "off",
         "unicorn/filename-case": "off",
         "unicorn/no-null": "off",
      },
   },

   globalIgnores([".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"]),
])

export default eslintConfig
