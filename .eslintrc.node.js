/* eslint-disable */
module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    },
    "extends": ["airbnb"],
    "rules": {
        "arrow-parens": ["error", "as-needed"],
        "no-unused-vars": [2, { "args": "none" }],
        "import/no-extraneous-dependencies": 0, // Conflicts with lib node path.
        "no-underscore-dangle": ["error", { "allow": ["__set__", "__get__", "_typeConfig", "_source"] }], // Allow rewire format.
        "import/no-unresolved": 0, // Conflicts with lib node path.
        "newline-per-chained-call": [2, { "ignoreChainWithDepth": 10 }],
        "strict": 0, // Use strict needed for let/const, but errors out in here
        "no-console": 1, // require('logger') & use logger.(debug, info, warning, error) instead
        "no-trailing-spaces": [2, { "skipBlankLines": true }], // weird issues with space indentation
        "new-cap": 0, // express Router or model's name use capital.
        "no-param-reassign": 0, // reassigning or modifying req is commin
        "default-case": 0, // for switches - we often use 3 switches for networks, seems unnecessary
        "consistent-return": 0, // unnecessary for a function using callback.
        "arrow-body-style": 0, // sometimes it's clearer to have a logic inside parenthesis.
        "max-len": [1, 120, 2, { "ignoreComments": true, "ignoreTrailingComments": true }]
    },
};