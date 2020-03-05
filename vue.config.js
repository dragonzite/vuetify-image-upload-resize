module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
  },
  transpileDependencies: ['vuetify'],
}
