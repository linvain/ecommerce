module.exports = {
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'env': {
		'es6': true,
		'browser': true,
		'node': true
	},
	'parserOptions': {
		'sourceType': 'module'
	},
	'rules': {
		'indent': ['warn', 'tab', { 'SwitchCase': 1 }],
		'semi': ['warn', 'never'],
		'quotes': ['warn', 'single'],
		'linebreak-style': ['warn', 'unix'],
		'eol-last': ['warn', 'always'],
		'no-multiple-empty-lines': ['warn', { 'max': 3, 'maxEOF': 1 }],
		'object-curly-spacing': ['warn', 'always'],
		'react/prop-types': ['off']
	}
}
