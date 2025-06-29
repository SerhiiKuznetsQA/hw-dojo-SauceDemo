// eslint.config.js
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // Общие правила игнорирования для нового свойства 'ignores' в ESLint v9
    // Это заменяет .eslintignore
    ignores: [
      'node_modules/',
      'test-results/',
      'playwright-report/',
      'blob-report/',
      'playwright/.cache/',
      '.auth/',
    ],
  },
  ...tseslint.configs.recommended, // Эквивалент plugin:@typescript-eslint/recommended
  {
    // Специфичные правила для вашего проекта
    rules: {
      'no-unused-vars': 'off', // Отключаем базовое правило ESLint
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // TypeScript-aware правило для неиспользуемых переменных
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Вы отключали это правило
      '@typescript-eslint/no-explicit-any': 'warn', // Вы установили это как предупреждение
    },
  },
  eslintPluginPrettierRecommended, // Интегрирует правила Prettier
  {
    // Опционально: если вам нужно указать глобальные переменные окружения
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: true, // Для тестов Playwright
        node: true, // Для окружения Node.js
      },
      parser: tseslint.parser,
      parserOptions: {
        project: true, // Это включает проверку типов для некоторых правил
        tsconfigRootDir: import.meta.dirname, // Предполагается, что tsconfig.json находится в корне
      },
    },
  }
);
// {
//     "env": {
//       "browser": true,
//       "node": true,
//       "es2021": true
//     },
//     "extends": [
//       "eslint:recommended",
//       "plugin:@typescript-eslint/recommended",
//       "plugin:react/recommended",
//       "plugin:react-hooks/recommended",
//       "plugin:import/recommended",
//       "plugin:import/typescript",
//       "prettier"
//     ],
//     "plugins": ["@typescript-eslint", "react", "react-hooks", "import"],
//     "parser": "@typescript-eslint/parser",
//     "parserOptions": {
//       "ecmaVersion": "latest",
//       "sourceType": "module"
//     },
//     "settings": {
//       "react": {
//         "version": "detect"
//       },
//       "import/resolver": {
//         "typescript": true,
//         "node": true
//       }
//     },
//     "rules": {
//       "no-unused-vars": "off",
//       "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
//       "@typescript-eslint/explicit-module-boundary-types": "off", // Consider enabling for stricter typing
//       "@typescript-eslint/no-explicit-any": "warn",
//       "react/react-in-jsx-scope": "off", // Not needed for React 17+ JSX transform
//       "react/prop-types": "off", // Not needed when using TypeScript
//       "import/order": [
//         "warn",
//         {
//           "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
//           "newlines-between": "always",
//           "alphabetize": {
//             "order": "asc",
//             "caseInsensitive": true
//           }
//         }
//       ]
//     }
//   }