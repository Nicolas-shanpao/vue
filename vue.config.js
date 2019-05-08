const CompressionWebpackPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'
// cdn预加载使用
const externals = {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    'element-ui': 'ELEMENT'
}

const cdn = {
    // 开发环境
    dev: {
        css: [],
        js: []
    },
    // 生产环境
    build: {
        css: [
            'https://liazz.work/CDN/element/index.css'
        ],
        js: [
            'https://liazz.work/CDN/vue/vue.min.js',
            'https://liazz.work/CDN/vue/vue-router.min.js',
            'https://liazz.work/CDN/vue/vuex.min.js',
            'https://liazz.work/CDN/axios/axios.min.js',
            'https://liazz.work/CDN/element/index.js'
        ]
    }
}

module.exports = {
    publicPath: isProduction ? '/lzzlwt/' : '/',
    assetsDir: 'static',
    outputDir: 'lzzlwt',
    configureWebpack: config => {
        if (isProduction) {
            // externals里的模块不打包
            Object.assign(config, {
                externals: externals
            })
            // 为生产环境修改配置...
            // 上线压缩去除console等信息
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        warnings: false,
                        compress: {
                            drop_console: true,
                            drop_debugger: false,
                            pure_funcs: ['console.log'] // 移除console
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            )
            // 开启gzip压缩
            const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: productionGzipExtensions,
                    threshold: 10240,
                    minRatio: 0.8
                })
            )
            if (process.env.npm_config_report) {
                // 打包后模块大小分析//npm run build --report
                config.plugins.push(new BundleAnalyzerPlugin(
                    {
                        //  可以是`server`，`static`或`disabled`。
                        //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
                        //  在“静态”模式下，会生成带有报告的单个HTML文件。
                        //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
                        analyzerMode: 'server',
                        //  将在“服务器”模式下使用的主机启动HTTP服务器。
                        analyzerHost: '127.0.0.1',
                        //  将在“服务器”模式下使用的端口启动HTTP服务器。
                        analyzerPort: 8889,
                        //  路径捆绑，将在`static`模式下生成的报告文件。
                        //  相对于捆绑输出目录。
                        reportFilename: 'report.html',
                        //  模块大小默认显示在报告中。
                        //  应该是`stat`，`parsed`或者`gzip`中的一个。
                        //  有关更多信息，请参见“定义”一节。
                        defaultSizes: 'parsed',
                        //  在默认浏览器中自动打开报告
                        openAnalyzer: true,
                        //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
                        generateStatsFile: false,
                        //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
                        //  相对于捆绑输出目录。
                        statsFilename: 'stats.json',
                        //  stats.toJson（）方法的选项。
                        //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
                        //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
                        statsOptions: null,
                        logLevel: 'info'// 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
                    }
                ))
            }
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: config => {
        // 对vue-cli内部的 webpack 配置进行更细粒度的修改。
        // 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
        config.plugin('html').tap(args => {
            if (process.env.NODE_ENV === 'production') {
                args[0].cdn = cdn.build
            }
            if (process.env.NODE_ENV === 'development') {
                args[0].cdn = cdn.dev
            }
            return args
        })
        // 设置目录别名alias
        config.resolve.alias
            .set('assets', '@/assets')
            .set('components', '@/components')
            .set('view', '@/view')
            .set('style', '@/style')
            .set('api', '@/api')
            .set('store', '@/store')
    },
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        // 启用 CSS modules for all css / pre-processor files.
        modules: false,
        loaderOptions: {
            // postcss: {
            //     // 这是rem适配的配置
            //     plugins: [
            //         require('postcss-px2rem')({
            //             remUnit: 100
            //         })
            //     ]
            // },
            //  全局引入公用scss;向全局sass样式传入共享的全局变量
            sass: {
                data: `
                @import "style/scss/common.scss";
                $src: "https://ss1.baidu.com/";
                ` // 全局引入
            }
        }
    },
    lintOnSave: true, // default false
    // 打包时不生成.map文件
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true, // 禁用webpack热重载检查 解决热更新失效问题
        port: 8080, // 端口号    https: false, // https:{type:Boolean}
        open: true, // 配置自动启动浏览器
        // proxy: 'http://123.56.7.142', // 配置跨域处理,只有一个代理
        proxy: {
            '/proname': {
                target: 'http://123.56.7.142/', // 需要请求的地址
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/proname': '/' // 替换target中的请求地址，也就是说，在请求的时候，url用'/webapi'代替'http://47.107.119.18:8090/webapi'
                }
            },
            '/phpoa': {
                target: 'http://123.56.7.142/', // 需要请求的地址
                changeOrigin: true, // 是否跨域
                pathRewrite: {
                    '^/phpoa': '/' // 替换target中的请求地址，也就是说，在请求的时候，url用'/webapi'代替'http://47.107.119.18:8090/webapi'
                }
            },
            '/ysy': {
                target: 'https://open.ys7.com', // 需要请求的地址
                changeOrigin: false, // 是否跨域
                pathRewrite: {
                    '^/ysy': '/' // 替换target中的请求地址，也就是说，在请求的时候，url用'/baidu'代替'http://123.56.7.142/bimplatform'
                }
            }
        } // 配置多个代理
    }
}
