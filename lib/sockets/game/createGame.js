const Game = require('../../models/Game')

module.exports = (user, socket, openGames) => {

    const newGame = new Game(user);
    openGames.push(newGame);
    socket.join(newGame.gameId)

    socket.emit("GAME_CREATED", newGame)
}