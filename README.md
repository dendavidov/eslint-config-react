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
