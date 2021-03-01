module.exports = {
  configureWebpack: {
    // other webpack options to merge in ...
  },
  // devServer Options don't belong into `configureWebpack`
  devServer: {
    // public: '10.4.2.30',
    hot: true,
    disableHostCheck: true,
  },
};