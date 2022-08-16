const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    css: {        
        loaderOptions: {
            sass: {
                additionalData: '@import "/src/assets/css/variables.scss";'
            },
        },
    },
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    },
    transpileDependencies: true,    
})
