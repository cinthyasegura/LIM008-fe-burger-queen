module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "react-hooks",
        "jest"
      ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "linebreak-style": 0,
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      },
    "extends": ["plugin:jest/recommended"],
    "parser": "babel-eslint"
      
};