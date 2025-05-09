module.exports = {
    // Lint & Prettify TS and JS files
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    // Prettify only Markdown and JSON files
    '*.{json,css,md}': ['prettier --write'],
};
