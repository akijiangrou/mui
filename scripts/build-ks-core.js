const path = require('path');
const fs = require('./utils/fs-extra.js');

function buildKs(cb) {
  const env = process.env.NODE_ENV || 'development';
  let index = fs.readFileSync(path.resolve(__dirname, '../kitchen-sink/core/index.html'));
  if (env === 'development') {
    index = index
      .replace('../../packages/core/xui-bundle.min.css', '../../build/core/xui-bundle.css')
      .replace('../../packages/core/xui-bundle.min.js', '../../build/core/xui-bundle.js');
  } else {
    index = index
      .replace('../../build/core/xui-bundle.css', '../../packages/core/xui-bundle.min.css')
      .replace('../../build/core/xui-bundle.js', '../../packages/core/xui-bundle.min.js');
  }
  fs.writeFileSync(path.resolve(__dirname, '../kitchen-sink/core/index.html'), index);
  cb();
}

module.exports = buildKs;
