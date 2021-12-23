module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-shadow': 'off',
    'jsx-quotes': 0,
    'prettier/prettier': 'off',
    quotes: [0, 'single', 'avoid-escape'], // 不强制单引号或双引号
    semi: [2, 'always'], // 强制分号结尾
    'comma-dangle': [0, 'never'], // 属性结尾是否强制逗号
    "no-unused-vars": 1, // 是否禁止未使用的变量
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']
    }],
    'react-native/no-inline-styles': 'off'
  },
  globals: {
    _PROPS: "writable",
    G_CONFIG: "readonly",
    G_HTTP_WHITELIST: "readonly",
    G_LOCALSTORAGE_CLEAR: "writable",
    G_LOCALSTORAGE_GET: "writable",
    G_LOCALSTORAGE_SET: "writable",
    G_DATE_FORMAT: "writable",
  }
};
