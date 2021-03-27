const fs = require('fs');

module.exports = (fileName) => {
    const string = fs.readFileSync(fileName);
    return JSON.parse(string)
}