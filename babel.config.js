module.exports = function(api) {
  api.cache.forever();
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./source'],
          alias: {
            '@assets': './source/assets',
            '@screens': './source/screens',
            '@storage': './source/storage',
            '@utils': './source/utils'
          }
        }
      ]
    ]
  };
};
