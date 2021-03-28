const readFromFile = require('../file/readFromFile')
const lengthMarkovFile = process.env.LENGTH_MARKOV;


module.exports = (word) => {
    const lengthMarkov = readFromFile('data/lengthmarkov.json');

    const wordLength = word.length;

    if (!lengthMarkov[wordLength]) return 0;
    else {
        return lengthMarkov[wordLength]
    }

}