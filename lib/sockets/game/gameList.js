

module.exports = (socket, openGames) => {
    socket.emit("GAME_LIST", openGames)
}