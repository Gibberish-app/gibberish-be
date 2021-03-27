const dictionarySearch = require('../../utils/probability/dictionarySearch')
const wordProbability = require('../../utils/wordProbability')

module.exports = (word) => {
    let response = false;

    const wordExists = dictionarySearch(word);

    if (!wordExists) {
        response = wordProbability(word);
    }

    socket.emit("WORD_CHECKED", response)
}