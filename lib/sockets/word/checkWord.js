const dictionarySearch = require('../../utils/probability/dictionarySearch')
const wordProbability = require('../../utils/wordProbability')

module.exports = (word) => {
    let response = false;
    let reason = "exists"

    const wordExists = dictionarySearch(word);

    if (!wordExists) {
        reason = "improbable"
        response = wordProbability(word);
    }

    socket.emit("WORD_CHECKED", { reason, response })
}