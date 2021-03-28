
module.exports = (gameState, io) => {

    io.sockets.in(gameState.gameId).emit("WORD_PLAYED", gameState)
}