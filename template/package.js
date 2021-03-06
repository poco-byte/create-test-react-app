const args = require('minimist')(process.argv);

module.exports = {
	packageValue: `{
	"name": "${args.app}",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"babel": {
		"presets": [
			"@babel/preset-env",
			"@babel/preset-react"
		]
	},
	"scripts": {
		"start": "webpack-dev-server --open",
		"create": "webpack",
		"createprod": "webpack --mode production --env prod",
		"test": "echo Error: no test specified && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"@babel/core": "^7.7.4",
		"@babel/preset-env": "^7.7.4",
		"@babel/preset-react": "^7.7.4",
		"babel-loader": "^8.0.6",
		"css-loader": "^3.2.1",
		"html-webpack-plugin": "^3.2.0",
		"mini-css-extract-plugin": "^0.8.0",
		"node-sass": "^4.13.0",
		"react": "^16.12.0",
		"react-dom": "^16.12.0",
		"sass-loader": "^8.0.0",
		"source-map-loader": "^0.2.4",
		"style-loader": "^1.0.1",
		"webpack": "^4.41.2",
		"webpack-bundle-analyzer": "^3.6.0",
		"webpack-cli": "^3.3.10",
		"webpack-dev-server": "^3.9.0"
	}
}
`
}