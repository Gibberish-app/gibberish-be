
module.exports = (io, gameId) => {

    io.socket.in(gameId).emit("GAME_OVER", null)
}