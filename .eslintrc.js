const isProd = !!(
	process.env.NODE_ENV === 'production' ||
	process.env.BABEL_ENV === 'production'
);

const isWindows = /^win/.test(process.platform);

const warningLevel = isProd ? 2 : 1;

module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
		'jest/globals': true,
	},
	parser: 'babel-eslint',
	parserOptions: {
        ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
			modules: true
		},
	},
	plugins: ['react', 'prettier', 'jest'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'prettier',
		'prettier/react',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:jest/recommended'
	],
	rules: {
		'prettier/prettier': warningLevel,
		'react/prop-types': [
			warningLevel,
			{
				ignore: ['className', 'forwardedRef', 'isFocused'],
			},
		],
		'no-unused-vars': [
			warningLevel,
			{
				vars: 'local',
				args: 'after-used',
				ignoreRestSiblings: true,
			},
		],
		'import/no-unresolved': [
			warningLevel,
			{ caseSensitive: isWindows ? false : true },
		],
	},
	overrides: {
		files: ['**/*.tsx','**/*.ts'],
		parser: 'typescript-eslint-parser',
		rules: {
		  'no-undef': 'off'
		}
	},
	settings: {
		'react': {
			version: require('react').version
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},
	},
};
