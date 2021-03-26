const fs = require('fs')

module.exports = (string, fileName) => {
    fs.closeSync(fs.openSync(fileName, 'w'));
    fs.writeFileSync(fileName, string);
}