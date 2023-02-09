module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,css,webp,avif,jpg,woff2,svg,txt,xml}'
	],
	swDest: 'dist',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};