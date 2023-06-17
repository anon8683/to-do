const path = require("path");

module.exports = {
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		historyApiFallback: true,
		compress: true,
		port: 9000,
	},
	mode: "development",
	entry: "./src/",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
