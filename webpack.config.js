const path = require('path');
const mode = process.env.NODE_ENV || 'development'; //если переменная не определена то дудут development, а если определена то production или development
const devmode = mode === 'development'; //проверка на продакшин или девелопмент
const target = devmode? 'web' : 'browserslist'; //собираем сборку под web или собираем сборку на продакшн учитая настойки browserlist
const devtool = devmode? 'source-map' : undefined; //если у нас режим разработки то тогда мы должны будем добавить source-map чтоб удобно было находить ошибки итд. если продакшн то undefined

const HtmlWebpackPlugin = require('html-webpack-plugin'); //импорт html плагина
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const postCssPresetEnv = require('postcss-preset-env'); //плагин
module.exports = {
	mode,
	target,
	devtool,
	entry: ["@babel/polyfill", path.resolve(__dirname, 'src', 'index.js')], //"@babel/polyfill", 
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: '[name].[contenthash].js',
		assetModuleFilename: 'assets/[name].[hash][ext]' //в папку assets запишутся картинки
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html') // template - это откуда будут браться наши данные.
		  /*filename: 'index.html' - тут мы можем указать имя готового html и запишет по умелчанию в dist
			minify: {
				collapseWhitespace: !devmode - минификатор для продакшина, убирает пробелы итд
			}*/
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css' //выносит итоговый файл в отдельный файл 
		})
	],
	module: {
		rules: [
		{
			test: /\.html$/i,
			loader: 'html-loader'
		},
		  {
			test: /\.(c|sc|sa)ss$/i,
			use: [
				devmode? 'style-loader' : MiniCssExtractPlugin.loader, // 4 действие создастся файлик css и продключится к html или через style или через link
				"css-loader", // 3 действие позволяет основному index.js понять что такое css файл и подключить его к себе (обычно к js нельзы подключить css)
				{				// 2 действие добавит автопркфиксы в нас переведённый css
					loader: "postcss-loader", //этот лоудер будет использовать postCSS
					options: {
						postcssOptions: {
							plugins: [
								postCssPresetEnv //добавляет автопрефиксы
							]						
						}
					}
				},
				"sass-loader" // 1 действие из scss/sass в css
			]
		},
		{
			test: /\.m?js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {targets: "defaults"}]	
					]
				}
			}
		},
		  {
		  	test: /\.woff2?$/i,
		  	type: 'asset/resource', // 
		  	generator: {			// генератор для названия файлов , если не воспользуюсь генератором то всё будет записываться в dist
		  		filename: 'fonts/[name][ext]' //папка куда запишется шрифт / имя шрифта / расширение шрифта. 
		  	}
		  },
		  {
		  	test: /\.(png|svg|jpg|jpeg|gif)$/i, // для поддержке картинок из js и css
			use: [
				{
					loader: 'image-webpack-loader',
					options: {
						mozjpeg: {			//плагин
						  progressive: true,
						},
						// optipng.enabled: false will disable optipng
						optipng: {			//плагин
						  enabled: false,
						},
						pngquant: {			//плагин
						  quality: [0.65, 0.90],
						  speed: 4
						},
						gifsicle: {			//плагин
						  interlaced: false,
						},
						// the webp option will enable WEBP
						webp: {				//плагин
						  quality: 75
						}
					  }					
				}
			],
		  	type: 'asset/resource'
		  }
		] //массив правил
	}

}