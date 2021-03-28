const singleLetterProbabiltiy = require('./probability/singleLetterProbabiltiy')
const wordLengthProbability = require('./probability/wordLengthProbability')
const threshold = process.env.PROB_THRESHOLD;

module.exports = (word) => {

    const probabilities = [...singleLetterProbabiltiy(word), wordLengthProbability(word)]
    if (probabilities.includes(0)) return { avg: 0, probable: false }
    const arrayAvg = average(probabilities);

    return arrayAvg > .05
}

const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length

