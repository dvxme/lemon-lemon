// eslint-disable-next-line no-undef, immutable/no-mutation
module.exports = {
  env: {
    browser: true,
    es2020: true, 
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module', 
  },
  plugins: [
    'react-refresh',
    'react',
    '@emotion',
    'import',
    'no-relative-import-paths',
    'import-newlines',
    'immutable',
    'prefer-arrow',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',

    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', {
      maximum: {
        single: 1,
        multi: 1,
      },
    }],

    '@emotion/syntax-preference': ['error', 'object'],

    'import/extensions': ['error', 'never', {
      jpg: 'always',
      svg: 'always',
    }],
    'import/order': ['error'],
    'import/no-default-export': ['error'],
    'import/no-relative-packages': ['error'],
    'import/newline-after-import': ['error', {
      count: 2, 
    }],

    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      {
        allowSameFolder: false,
        rootDir: 'src',
        prefix: '', 
      },
    ],

    'import-newlines/enforce': ['error', {
      items: 1, 
    }],

    'immutable/no-let': 'error',
    'immutable/no-this': 'error',
    'immutable/no-mutation': 'error',

    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
        allowStandaloneDeclarations: false,
      },
    ],

    semi: ['error', 'never'],
    indent: ['error', 2, {
      SwitchCase: 1,
    }],
    quotes: ['error', 'single'],
    'no-var': 'error',
    'no-param-reassign': 'error',
    'quote-props': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-property-newline': ['error'],
    'object-curly-newline': ['error', {
      ObjectExpression: 'always',
      ObjectPattern: 'always',
      ImportDeclaration: {
        consistent: true, 
      },
      ExportDeclaration: 'always',
    }],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'multiline-ternary': ['error', 'always'],
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 1,
    }],
  },
}
