

module.exports = (user, gameId, openGames, socket, io) => {

    socket.join(gameId)

    openGames = openGames.filter(game => game.gameId !== gameId);

    io.sockets.in(gameId).emit("PLAYER_JOINED", user)
}