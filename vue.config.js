module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      '^/lists': {
        target: 'http://localhost:8000',
      },
    },
  },
};
