module.exports = {
    parser: "@babel/eslint-parser",
    parserOptions: {
        babelOptions: {
            configFile: "./babel.config.json",
        },
    },
    env: {
        "browser": true,
        "node": true,
        "es6": true,
        "jest": true,
        "jest/globals": true,
    },
    extends: ["eslint:recommended", "google"],
    plugins: ["jest"],
    rules: {
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "require-jsdoc": 0,
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": "off",
        "space-in-parens": ["error", "never"],
        "max-len": ["error", { "code": 120 }],
        "indent": ["error", 4, { "SwitchCase": 1 }],
    },
};
