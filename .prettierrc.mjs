/** @type {import("prettier").Config} */
const config = {
    bracketSpacing: true,
    printWidth: 100,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    useTabs: false,
    tabWidth: 4,
    overrides: [
        {
            files: ['*.yml', '*.yaml'],
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ['*.ts', '*.tsx'],
            options: {
                singleQuote: true,
            },
        },
    ],
    plugins: [],
};

export default config;
