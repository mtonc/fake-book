{
  module.exports {
    plugins: [
      new webpack.ProvidePlugin({
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      })
    ],
  }
}
