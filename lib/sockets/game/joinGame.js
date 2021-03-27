

module.exports = (user, gameId, openGames, socket, io) => {

    socket.join(gameId)
    const gameIndex = openGames.findIndex(game => game.gameId === gameId)

    const joinedGame = openGames[gameIndex];

    joinedGame.addUser(user)

    socket.emit("GAME_JOINED", joinedGame)

    io.sockets.in(gameId).emit("PLAYER_JOINED", user)
}