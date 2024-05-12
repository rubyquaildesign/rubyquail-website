/** @type {import('stylelint').Config} */
const stylelintConfig = {
  extends: [
    'stylelint-config-html',
    'stylelint-config-recommended',
    'stylelint-config-prettier',
  ],
  rules: {
    'rule-empty-line-before': ['always', { except: 'first-nested' }],
    'at-rule-no-unknown': [true, { ignoreAtRules: ['/extend/'] }],
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],
    'no-descending-specificity': null,
  },
};

module.exports = stylelintConfig;
