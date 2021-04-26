module.exports = {
	extends: ['airbnb-typscript', 'plugin:jsx-a11y/recommended'],
	ignorePatterns: ['node_modules', 'build', 'dist'],
	plugins: ['react', 'typescript-eslint', 'jest', 'prettier', 'jsx-a11y'],
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: {
		'no-console': 0,
	},
}
