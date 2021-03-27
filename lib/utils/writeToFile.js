const fs = require('fs')

module.exports = (object, fileName) => {
    const string = JSON.stringify(object);
    fs.closeSync(fs.openSync(fileName, 'w'));
    fs.writeFileSync(fileName, string);
}