[![npm version](https://img.shields.io/npm/v/@dendavidov/eslint-config-react.svg)](https://www.npmjs.com/package/eslint)
[![Downloads](https://img.shields.io/npm/dm/@dendavidov/eslint-config-react.svg)](https://www.npmjs.com/package/eslint)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config-react.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config-react?ref=badge_shield)
[![CodeQL](https://github.com/dendavidov/eslint-config-react/actions/workflows/codeql.yml/badge.svg)](https://github.com/dendavidov/eslint-config-react/actions/workflows/codeql.yml)
[![checks](https://github.com/dendavidov/eslint-config-react/actions/workflows/test.yml/badge.svg)](https://github.com/dendavidov/eslint-config-react/actions/workflows/test.yml)

# @dendavidov/eslint-config-react

Opinionated eslint-config for React.js SPA.

## Installation

```bash
npm i -D @dendavidov/eslint-config-react
```

## Usage

Add .eslintrc.json in the root of your project
```json
{
  "extends": "@dendavidov/eslint-config-react"
}
```
Add script to package.json -> scripts:
```
{
  ...
  "scripts": {
    ...
    "lint": "eslint './src/**/*.{ts,tsx}'"
  },
  ...
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://dendavidov.mit-license.org/)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config-react.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config-react?ref=badge_large)