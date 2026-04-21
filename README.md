[![npm version](https://img.shields.io/npm/v/@dendavidov/eslint-config-react.svg)](https://www.npmjs.com/package/@dendavidov/eslint-config-react)
[![Downloads](https://img.shields.io/npm/dm/@dendavidov/eslint-config-react.svg)](https://www.npmjs.com/package/@dendavidov/eslint-config-react)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config-react.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config-react?ref=badge_shield)
[![CodeQL](https://github.com/dendavidov/eslint-config-react/actions/workflows/codeql.yml/badge.svg)](https://github.com/dendavidov/eslint-config-react/actions/workflows/codeql.yml)
[![checks](https://github.com/dendavidov/eslint-config-react/actions/workflows/test.yml/badge.svg)](https://github.com/dendavidov/eslint-config-react/actions/workflows/test.yml)

# @dendavidov/eslint-config-react

Opinionated eslint-config for React.js SPA with ESLint 9+ (flat config).
Includes security best-practice rules via `eslint-plugin-security`.

- **ESLint 9+ flat config** (bundled `eslint` + `@eslint/js`; plugin ecosystem is not fully on ESLint 10 yet, so this package currently resolves ESLint 9.x)
- **Node.js 24.x required** (`engines.node`); this repo pins an exact patch in `.nvmrc` / `Dockerfile` for CI
- **ESLint is bundled** as a normal dependency — you do not add `eslint` as its own devDependency; resolve the CLI with `npx eslint`, `pnpm exec eslint`, or a `lint` script

## Installation

Install this package **and** its peer dependencies (ESLint plugins and parsers this config expects):

```bash
pnpm add -D @dendavidov/eslint-config-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-security eslint-plugin-testing-library
```

(or the equivalent `npm i -D …` with the same package list.)

`eslint` itself is installed transitively with `@dendavidov/eslint-config-react`; use `npx eslint` or `pnpm exec eslint` so the binary comes from your install tree.

## Usage

Create `eslint.config.js` in the root of your project:

```javascript
import config from '@dendavidov/eslint-config-react';

export default config;
```

Or extend with your own rules:

```javascript
import config from '@dendavidov/eslint-config-react';

export default [
  ...config,
  {
    rules: {
      // Your custom rules
    },
  },
];
```

Add script to package.json:

```json
{
  "scripts": {
    "lint": "eslint './src/**/*.{ts,tsx,js,jsx}'"
  }
}
```

## Node.js version

This config requires **Node.js 24.x** (see `engines.node` on npm). Development of this package uses a **pinned patch** in `.nvmrc` (and `Dockerfile`) so CI and Dependabot stay aligned.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://dendavidov.mit-license.org/)

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config-react.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fdendavidov%2Feslint-config-react?ref=badge_large)
