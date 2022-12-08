const path = require('path');

module.exports = {
  process(src, filename) {
    return `${JSON.stringify(path.basename(filename))}`;
  },
};
