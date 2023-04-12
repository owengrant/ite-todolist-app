module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      '^/lists': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      },
    },
  },
};
