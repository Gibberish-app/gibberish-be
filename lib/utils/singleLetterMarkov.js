const wordArray = require('../../data/wordArray');
const writeToFile = require('./writeToFile');

module.exports = () => {
    const array = wordArray();
    const singleLetterObject = { count: 0 };

    for (const word of array) {
        const letterArray = word.split('');
        const wordLength = letterArray.length - 1;

        for (let i = 0; i < wordLength; i++) {
            singleLetterObject.count++;
            const currentLetter = letterArray[i];
            const nextLetter = letterArray[i + 1];

            if (currentLetter && !singleLetterObject[currentLetter]) {
                singleLetterObject[currentLetter] = { count: 0 }
            }

            if (currentLetter && nextLetter && !singleLetterObject[currentLetter][nextLetter]) {
                singleLetterObject[currentLetter][nextLetter] = 0;
            }

            singleLetterObject[currentLetter][nextLetter]++;
            singleLetterObject[currentLetter].count++;
        }
    }

    for (const currentLetter in singleLetterObject) {
        if (currentLetter !== "count") {
            for (const nextLetter in singleLetterObject[currentLetter]) {
                if (nextLetter !== "count") {
                    singleLetterObject[currentLetter][nextLetter] = singleLetterObject[currentLetter][nextLetter] / singleLetterObject[currentLetter].count;
                }
            }
        }
    }
    writeToFile(singleLetterObject, "data/singleLetterMarkov.json")
}