module.exports = {
  root: true,
  //extends: '@react-native-community',
  extends: ['@react-native-community/eslint-config', 'eslint-config-prettier'],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    'prettier/prettier': 0,
  },
  
};
