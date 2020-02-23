/* 給 ide 看的 */
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      '@assets': path.resolve(__dirname, './source/assets'),
      '@screens': path.resolve(__dirname, './source/screens'),
      '@storage': path.resolve(__dirname, './source/storage'),
      '@utils': path.resolve(__dirname, './source/utils')
    }
  }
};
