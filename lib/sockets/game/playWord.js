
module.exports = (newGameBoard, io) => {

    io.sockets.in(newGameBoard.gameId).emit("WORD_PLAYED", newGameBoard)
}