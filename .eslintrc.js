module.exports = {
  extends: ["eslint:recommended", "prettier"],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["promise", "node"],
  rules: {
    "no-console": 0,
    "no-process-env": 0,
    "no-unused-vars": 0,
    "valid-jsdoc": [
      "warn",
      {
        requireReturn: false,
        requireReturnDescription: false,
        preferType: {
          String: "string",
          Number: "number",
          Boolean: "boolean",
          Symbol: "symbol",
          function: "Function",
          object: "Object",
          Date: "date",
          error: "Error"
        }
      }
    ],
    "accessor-pairs": "warn",
    "array-callback-return": "error",
    complexity: "warn",
    "dot-notation": "error",
    eqeqeq: "error",
    "no-empty-function": "error",
    "no-implied-eval": "error",
    "no-invalid-this": "error",
    "no-lone-blocks": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-escape": "error",
    "no-useless-concat": "error",
    "no-void": "error",
    "no-warning-comments": "warn",
    yoda: "error",
    "no-label-var": "error",
    "no-shadow": "error",
    "no-undef-init": "error",
    "callback-return": "error",
    "handle-callback-err": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "consistent-this": "error",
    "func-names": "error",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "max-depth": "error",
    "max-nested-callbacks": ["error", { max: 4 }],
    "max-statements-per-line": ["error", { max: 2 }],
    "new-cap": "error",
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-lonely-if": "error",
    "no-new-object": "error",
    "no-unneeded-ternary": "error",
    "operator-assignment": "error",
    "spaced-comment": "error",
    "no-duplicate-imports": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "prefer-const": "warn",
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      { enforceForRenamedProperties: false }
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "promise/no-return-wrap": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn",
    "promise/no-return-in-finally": "warn",
    "node/no-missing-require": "off",
    "node/no-unpublished-bin": "error",
    "node/no-deprecated-api": "error",
    "node/exports-style": ["error", "module.exports"],
    "no-var": "error"
  }
};
