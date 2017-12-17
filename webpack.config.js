const path = require('path');
const webpack = require('webpack');

module.exports =  {
	context: path.resolve(__dirname,'.'),
    entry: './src/index.js',
    output: {
		filename: 'optimal-select.js',
		path: path.resolve(__dirname, './dist'),
		library: 'optimal-select',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	resolve: {
		extensions:['.js']
	},
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			include: path.resolve(__dirname,'./src'),
			use: 'babel-loader'
		}]
  }//,
  //plugins: [
	//	new webpack.optimize.UglifyJsPlugin()
	//]
};