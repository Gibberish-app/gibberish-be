const fs = require('fs')

module.exports = () => {
    const rawText = fs.readFileSync("data/rawWords.txt", 'utf8')
    const textArray = rawText.split('\r\n');
    return textArray;
}

