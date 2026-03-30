/** @type {import('stylelint').Config} */
const stylelintConfig = {
   extends: [
      "stylelint-config-standard",
      "stylelint-config-idiomatic-order",
      "stylelint-config-standard-scss",
   ],
   plugins: ["stylelint-order", "stylelint-scss"],
   rules: {
      "custom-property-empty-line-before": undefined,
      "selector-class-pattern": undefined,
      "selector-pseudo-class-no-unknown": [
         true,
         {
            ignorePseudoClasses: ["global"],
         },
      ],
      "scss/at-rule-no-unknown": [
         true,
         {
            ignoreAtRules: ["theme"],
         },
      ],
   },
}

export default stylelintConfig
