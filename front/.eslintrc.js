module.exports = {
	root: true,
	extends: [
		'airbnb-typescript',
		'plugin:jsx-a11y/recommended',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:@prettier/recommended',
	],
	ignorePatterns: ['node_modules', 'build', 'public'],
	plugins: ['react', '@typescript-eslint', 'jest', 'prettier', 'jsx-a11y'],
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
		'no-console': 2,
	},
}
