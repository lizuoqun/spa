const {defineConfig} = require('@vue/cli-service');
const {resolve} = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    }
  }
});
