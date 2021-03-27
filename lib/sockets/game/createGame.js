const Game = require('../../models/Game')

module.exports = (user, gameArray) => {

    const newGame = new Game(user);
    gameArray.push(newGame);

    socket.emit("GAME_CREATED", newGame)
}