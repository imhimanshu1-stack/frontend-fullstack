const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/frontend-fullstack/' // Replace 'frontend-fullstack' with your repository name
    : '/'
})
