/* 給 ide 看的 */
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
      '@': path.resolve(__dirname, './source')
    }
  }
}
