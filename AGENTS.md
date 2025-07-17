# AGENTS.md

This file provides comprehensive guidance for AI agents working with the `@dendavidov/eslint-config-react` repository.

## Project Overview

This repository contains a shareable ESLint configuration package designed specifically for React.js Single Page Applications (SPAs) with TypeScript support. The package provides opinionated linting rules that promote code quality, consistency, and best practices across React projects.

**Key Characteristics:**
- **Package Type**: Shareable ESLint configuration for npm distribution
- **Target Audience**: React.js developers using TypeScript
- **ESLint Version**: Supports ESLint 9+ with flat configuration format
- **Scope**: Frontend development, focusing on React/TypeScript codebases

## Project Structure

```
eslint-config-react/
├── src/
│   ├── index.js          # Main ESLint configuration export
│   ├── index.d.ts        # TypeScript type definitions
│   └── index.test.js     # Configuration tests
├── package.json          # NPM package configuration
├── README.md            # User-facing documentation
├── LICENSE              # MIT license
└── commitlint.config.cjs # Commit message linting
```

**Core Files:**
- `src/index.js`: The primary ESLint configuration using flat config format
- `package.json`: Defines dependencies, peer dependencies, and build scripts
- `src/index.test.js`: Jest tests validating the configuration

## Technology Stack

### Primary Technologies
- **ESLint 9+**: Modern linting with flat configuration format
- **TypeScript**: Type-safe configuration and definitions
- **React**: Target framework for this configuration
- **Jest**: Testing framework for configuration validation

### ESLint Plugin Ecosystem
The configuration integrates multiple specialized plugins:
- `@typescript-eslint/*`: TypeScript-specific linting rules
- `eslint-plugin-react`: React-specific linting rules
- `eslint-plugin-import`: Import/export statement validation
- `eslint-plugin-jsx-a11y`: Accessibility linting for JSX
- `eslint-plugin-jest`: Jest testing framework rules
- `eslint-plugin-testing-library`: React Testing Library rules
- `eslint-config-prettier`: Disables formatting rules that conflict with Prettier

## Configuration Architecture

### Flat Config Structure
The configuration uses ESLint's modern flat config format with multiple configuration objects:

1. **Base Configuration**: Core ESLint recommended rules
2. **React Configuration**: React-specific rules and settings
3. **Import Configuration**: Import/export validation
4. **JSX A11y Configuration**: Accessibility rules
5. **TypeScript Configuration**: TypeScript-specific rules for `.ts/.tsx` files
6. **Prettier Configuration**: Formatting rule conflicts resolution
7. **Test Configuration**: Jest and Testing Library rules for test files
8. **TypeScript Test Configuration**: Combined TypeScript and test rules

### File Targeting Strategy
- `**/*.{js,jsx,ts,tsx}`: General React/JavaScript files
- `**/*.{ts,tsx}`: TypeScript-specific configurations
- `**/__tests__/**/*`, `**/*.{spec,test}.*`: Test files
- `**/jest.setup.*`: Jest setup files

## Development Workflow

### When Contributing to This Repository:

1. **Code Style**: Follow the existing flat config pattern
2. **Testing**: All configuration changes must have corresponding tests
3. **Dependencies**: Use peer dependencies for ESLint plugins to avoid version conflicts
4. **Versioning**: Follow semantic versioning for releases

### When Using This Configuration:

1. **Installation**: Install as dev dependency with required peer dependencies
2. **Configuration**: Import and use in `eslint.config.js`
3. **Customization**: Extend the configuration array with additional rules

## Code Quality Standards

### ESLint Configuration Best Practices
- **Modular Structure**: Each concern (React, TypeScript, testing) has its own configuration object
- **Explicit Globals**: Define all expected global variables for each environment
- **File-Specific Rules**: Apply rules only to relevant file types
- **Peer Dependencies**: Let consumers control plugin versions

### JavaScript/TypeScript Standards
- **ES Modules**: Use `import/export` syntax throughout
- **Type Safety**: Provide TypeScript definitions for all exports
- **Modern JavaScript**: Target ES2020+ features

## Testing Strategy

### Test File Organization
- Tests located in `src/index.test.js`
- Focus on validating configuration structure and rule application
- Use Jest for test framework

### Testing Approach
- **Configuration Validation**: Ensure configuration objects are properly structured
- **Rule Testing**: Verify that rules are applied correctly to different file types
- **Export Testing**: Confirm that the default export is a valid ESLint flat config

### Test Patterns
```javascript
// Test configuration structure
expect(config).toBeInstanceOf(Array);

// Test file targeting
expect(config.some(conf => conf.files?.includes('**/*.tsx'))).toBe(true);

// Test rule presence
expect(reactConfig.rules).toHaveProperty('react/react-in-jsx-scope');
```

## Build and Release Process

### NPM Package Structure
- **Main Entry**: `src/index.js` (ES module)
- **Type Definitions**: `src/index.d.ts`
- **Published Files**: Limited to essential files via `files` field in package.json

### Release Workflow
1. **Semantic Release**: Automated versioning based on conventional commits
2. **Git Hooks**: Husky for pre-commit validation
3. **Conventional Commits**: Standardized commit message format
4. **NPM Registry**: Public publishing to npm registry

### Scripts Available
- `npm test`: Run Jest tests
- `npm run format`: Apply Prettier formatting
- `npm run format:check`: Check Prettier formatting
- `npm run release`: Trigger semantic release

## AI Agent Guidelines

### When Modifying Configuration
- **Add Test Coverage**: Every new rule or configuration block needs tests
- **Document Breaking Changes**: Update README.md for major version changes
- **Validate Peer Dependencies**: Ensure compatibility with target ESLint/plugin versions
- **Test with Real Projects**: Validate changes work in actual React applications

### When Helping Users
- **Installation Guidance**: Provide complete peer dependency installation commands
- **Configuration Examples**: Show how to extend or customize the base configuration
- **Troubleshooting**: Address common issues with TypeScript project paths and plugin conflicts

### Common User Scenarios
1. **First-time Setup**: Guide through installation and basic configuration
2. **Customization**: Help extend rules for specific project needs
3. **Migration**: Assist with upgrading from legacy ESLint configurations
4. **Debugging**: Help resolve configuration conflicts and rule issues

### Plugin Ecosystem Knowledge
- Understand the purpose and scope of each included plugin
- Know which rules are enabled by default vs. available for customization
- Recognize compatibility requirements between different plugin versions

## Repository Maintenance

### Dependencies Management
- **Peer Dependencies**: Keep ESLint plugins as peer dependencies
- **Version Compatibility**: Maintain compatibility with ESLint 9+
- **Security Updates**: Regularly update dev dependencies for security

### Documentation
- **README.md**: User-facing documentation with installation and usage
- **AGENTS.md**: This file for AI agent guidance
- **Package.json**: Accurate description and keywords for discoverability

### Quality Assurance
- **Automated Testing**: Jest tests run on every change
- **Format Checking**: Prettier ensures consistent code style
- **Commit Linting**: Conventional commit format enforced 