

module.exports = (user, gameId, openGames, socket, io) => {

    socket.join(gameId)
    const gameIndex = openGames.findIndex(game => game.gameId === gameId)

    const joinedGame = openGames[gameIndex];
    joinedGame.addUser(user)
    openGames.splice(gameIndex, 1);
    socket.emit("GAME_JOINED", joinedGame)

    socket.broadcast.emit("PLAYER_JOINED", joinedGame)
}