const fs = require('fs');
const path = require('path');

function resolveOutputName(name) {
  return path.join(__dirname, '/../__mocks__', `${name}.json`);
}

function writeDataToFile(name, data) {
  const filename = resolveOutputName(name);
  fs.writeFile(filename, JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    }

    console.log('It\'s saved!', filename, name);
  });
}

module.exports = Object.freeze({
  writeDataToFile
});
