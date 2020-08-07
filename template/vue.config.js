const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	devServer: {
		proxy: {
			'./': {
				target: '', // 开发地址
				changeOrigin: true, // 支持跨域
				ws: false,
				pathRewrite: {
					"^/api": ''
				}
			}
		}
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/styles/variable.scss";`
			},
		}
	},
}