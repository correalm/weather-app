module.exports = {
  root: true,
  env: {
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    '@react-native-community'
  ],
  globals: {
    __DEV__: 'readonly',
    JSX: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'react-native'
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed'], // Enforce parentheses around arrow function arguments (https://eslint.org/docs/latest/rules/arrow-parens)
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }], // Disallow trailing commas (https://eslint.org/docs/latest/rules/comma-dangle)
    'computed-property-spacing': ['error', 'always'], // Enforce consistent spacing inside computed property brackets (https://eslint.org/docs/latest/rules/computed-property-spacing)
    // 'eol-last': ['error', 'always'], // Require newline at the end of files
    'max-len': ['error', {
      code: 120,
      tabWidth: 2,
      ignoreComments: true
    }], // Enforce a maximum line length and tab size. (https://eslint.org/docs/latest/rules/max-len)
    'no-console': ['warn'], // Warn the use of console (https://eslint.org/docs/latest/rules/no-console)
    'no-duplicate-imports': ['error', { 'includeExports': true }], // Disallow duplicate module imports and exports (https://eslint.org/docs/latest/rules/no-duplicate-imports)
    'no-trailing-spaces': ['error', { skipBlankLines: true }], // Disallow trailing whitespace at the end of lines (https://eslint.org/docs/latest/rules/no-trailing-spaces)
    /* 'padding-line-between-statements': [
      'error',
      { 'blankLine': 'never', 'prev': 'import', 'next': 'import' },
      { 'blankLine': 'never', 'prev': 'import', 'next': 'cjs-import' },
      { 'blankLine': 'never', 'prev': 'cjs-import', 'next': 'import' },
      { 'blankLine': 'never', 'prev': 'cjs-import', 'next': 'cjs-import' }
    ], // Disallow padding lines between statements (https://eslint.org/docs/latest/rules/padding-line-between-statements) */
    quotes: ['error', 'single', { allowTemplateLiterals: true }], // Enforce single quotes (https://eslint.org/docs/latest/rules/quotes)
    'jsx-quotes': ['error', 'prefer-single'],
    semi: ['error', 'never'], // Remove semicolon from end of line (https://eslint.org/docs/latest/rules/semi)
    /* 'sort-imports': ['error', {
      'ignoreDeclarationSort': true,
      'memberSyntaxSortOrder': ['single', 'all', 'multiple', 'none']
    }], // Enforce sorted import declarations within modules (https://eslint.org/docs/latest/rules/sort-imports) */

    // eslint react native community plugin rules
    'prettier/prettier': 0, // Disable prettier

    // eslint react plugin rules
    'react/jsx-uses-react': 'off', // Prevent React to be incorrectly marked as unused
    'react/react-in-jsx-scope': 'off', // Prevent React to be incorrectly marked as unused is JSX files
    'react/jsx-sort-props': 'error', // Prevent props to be incorrectly sorted

    // eslint react hooks plugin
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // eslint react native plugin
    'react-native/no-color-literals': 2, // Checks color literals
    'react-native/no-inline-styles': 2, // Checks inline styles
    'react-native/no-unused-styles': 2, // Checks unused styles
    'react-native/no-raw-text': [2, {
      skip: ['Button', 'H1', 'H2', 'H3']
    }], // Checks raw text
    'react-native/no-single-element-style-arrays': 2, // Checks single element style arrays
    'react-native/split-platform-components': 2, // Checks split platform components
    'react-native/sort-styles': ['error', 'asc'] // Require StyleSheet keys to be sorted
  }
}
