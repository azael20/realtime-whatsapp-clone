module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        'prettier/prettier': 0,
        'object-curly-spacing': ['error', 'always'],
        quotes: [2, 'single', { avoidEscape: true }],
    },
};
