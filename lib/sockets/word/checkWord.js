const dictionarySearch = require('../../utils/probability/dictionarySearch')
const wordProbability = require('../../utils/wordProbability')
const returnScore = require('../../utils/scoring/returnScore')

module.exports = (tileArray, gameState, socket, io) => {
    const word = tileArray.map(tile => tile.letter).join('')

    const wordExists = dictionarySearch(word);

    if (wordExists) {
        socket.emit("WORD_CHECKED", 'The word exists')
    } else {
        const response = wordProbability(word);
        if (response) {
            const score = returnScore(tileArray)
            const userIndex = gameState.users.findIndex(user => user.socketId === socket.id)
            gameState.users[userIndex].score = score;
            console.log("🚀 ~ file: checkWord.js ~ line 18 ~ gameState.users[userIndex]", gameState.users[userIndex])

            io.sockets.in(gameState.gameId).emit("WORD_PLAYED", gameState)
        } else {
            socket.emit("WORD_CHECKED", "Word is improbable")
        }

    }

}