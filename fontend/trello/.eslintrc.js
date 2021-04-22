module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }], // 强制使用一致的反勾号、双引号或单引号
    'semi': [2, 'never'], // 禁止在语句末尾使用分号
  }
}
