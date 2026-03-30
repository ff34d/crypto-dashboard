/** @type {import('stylelint').Config} */
const stylelintConfig = {
   extends: [
      "stylelint-config-standard",
      "stylelint-config-idiomatic-order",
      "stylelint-config-standard-scss",
      "stylelint-config-recommended-vue/scss",
   ],
   plugins: ["stylelint-order", "stylelint-scss"],
   rules: {
      "custom-property-empty-line-before": null,
      "selector-class-pattern": null,
      "selector-pseudo-class-no-unknown": [
         true,
         {
            ignorePseudoClasses: ["global"],
         },
      ],
   },
}

export default stylelintConfig
