var path = require('path');
module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),//generate absolute path
		filename: "App.js"
	},

	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				//regular expression, only want babel loader to apply to js files, few files = faster
				test: /\.js$/,
				//not all js files need conversion, like require e.g. jquery
				exclude: /node_modules/
			}
		]

	}
}