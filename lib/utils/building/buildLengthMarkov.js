const wordArray = require('../../../data/wordArray')
const writeToFile = require('../file/writeToFile')

const lengthMarkovFile = process.env.LENGTH_MARKOV;

module.exports = () => {
    const array = wordArray();
    const lengthObject = array.reduce(reducer, { count: 0 })
    for (const wordLength in lengthObject) {
        if (wordLength !== "count") {
            lengthObject[wordLength] = lengthObject[wordLength] / lengthObject.count;
        }
    }

    writeToFile(lengthObject, lengthMarkovFile)
}

const reducer = (accumulator, currentValue) => {

    const length = currentValue.length;
    accumulator.count = accumulator.count + 1;
    if (accumulator[length])
        accumulator[length]++;
    else
        accumulator[length] = 1;
    return accumulator
}