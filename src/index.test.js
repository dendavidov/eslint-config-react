import config from './index.js';
import js from '@eslint/js';

describe('@dendavidov/eslint-config-react', () => {
  it('should export a valid ESLint flat config array', () => {
    expect(Array.isArray(config)).toBe(true);
    expect(config.length).toBeGreaterThan(0);
  });

  it('should have proper configuration structure', () => {
    const jsConfig = js.configs.recommended;
    expect(config).toEqual(expect.arrayContaining([jsConfig]));
  });

  it('should include Security plugin configuration', () => {
    const securityConfig = config.find((c) => c.plugins && c.plugins.security);
    expect(securityConfig).toBeDefined();
    expect(securityConfig.rules).toBeDefined();
  });

  it('should include React plugin configuration', () => {
    const reactConfig = config.find((c) => c.plugins && c.plugins.react);
    expect(reactConfig).toBeDefined();
    expect(reactConfig.rules).toBeDefined();
    expect(reactConfig.rules['react/react-in-jsx-scope']).toBe('off');
  });

  it('should include JSX A11y plugin configuration', () => {
    const a11yConfig = config.find((c) => c.plugins && c.plugins['jsx-a11y']);
    expect(a11yConfig).toBeDefined();
    expect(a11yConfig.rules).toBeDefined();
  });

  it('should include TypeScript configuration', () => {
    const tsConfig = config.find((c) => c.plugins && c.plugins['@typescript-eslint']);
    expect(tsConfig).toBeDefined();
    expect(tsConfig.files).toEqual(['**/*.{ts,tsx}']);
  });

  it('should include Jest configuration for test files', () => {
    const jestConfig = config.find((c) => c.plugins && c.plugins.jest);
    expect(jestConfig).toBeDefined();
    expect(jestConfig.files).toEqual([
      '**/__tests__/**/*',
      '**/*.{spec,test}.*',
      '**/jest.setup.*',
    ]);
    expect(jestConfig.languageOptions.globals).toBeDefined();
    expect(jestConfig.languageOptions.globals.describe).toBe('readonly');
    expect(jestConfig.languageOptions.globals.test).toBe('readonly');
    expect(jestConfig.languageOptions.globals.expect).toBe('readonly');
    expect(jestConfig.languageOptions.globals.jest).toBe('readonly');
  });

  it('should include browser globals', () => {
    const reactConfig = config.find((c) => c.plugins && c.plugins.react);
    expect(reactConfig.languageOptions.globals).toBeDefined();
    expect(reactConfig.languageOptions.globals.window).toBe('readonly');
    expect(reactConfig.languageOptions.globals.document).toBe('readonly');
    expect(reactConfig.languageOptions.globals.console).toBe('readonly');
    expect(reactConfig.languageOptions.globals.React).toBe('readonly');
  });
});
