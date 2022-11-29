module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: {
			ts: '@typescript-eslint/parser',
		},
		ecmaVersion: 2020,
	},
	env: {
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/base',
		'plugin:vue/essential',
		'@vue/standard',
		'@vue/typescript/recommended',
		'@nextcloud',
		'plugin:@typescript-eslint/recommended',
	],
	ignorePatterns: ['*.d.ts'],
	rules: {
		'no-console': 'warn',
		'@typescript-eslint/no-var-requires': 'off',
		// TODO: Trouble importing .ts files into .vue files for some reason?
		'import/extensions': 'off',
		'n/no-missing-import': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts'],
			},
		},
	},
}
