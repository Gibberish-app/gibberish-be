const readFromFile = require('../file/readFromFile')
const singleLetterMarkov = require('../../../data/singleLetterMarkov.json');

module.exports = (word) => {

    const letterArray = word.split('');

    const returnArray = letterArray.map((currentLetter, index) => {
        const nextLetter = letterArray[index + 1];

        if (nextLetter && singleLetterMarkov[currentLetter][nextLetter]) return singleLetterMarkov[currentLetter][nextLetter]

        else if (index > letterArray.length - 2) return "end"

        else return 0;
    })

    return returnArray.filter(prob => prob !== 'end')
}