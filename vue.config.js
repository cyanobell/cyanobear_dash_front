const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {port: 5000},
    pages: {
        index: {
            entry: 'src/main.ts',
            title: "シアノベアダッシュ！",
        }
    },
})