module.exports = {
    pages: {
        app: {
            entry: 'examples/main.js',
            template: 'examples/index.html',
            filename: 'index.html'
        }
    },
    publicPath: '/',
    productionSourceMap: false,
    devServer: {
        port: 8080,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/minhang-project-cooperation': {
                target: 'http://81.70.242.98:31200'
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.js',
                '@form-create/element-ui$': '@form-create/element-ui/dist/form-create.js',
            }
        }
    }
};
