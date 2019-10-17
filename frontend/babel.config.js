module.exports = {
	'presets': [
		'@babel/preset-react',
		[
			'@babel/preset-env',
			{
				'useBuiltIns': 'usage',
				'corejs': 3,
			},
		],
	],
	'plugins': ['transform-undefined-to-void'],
}
