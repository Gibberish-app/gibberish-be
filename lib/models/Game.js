const newGameBoard = require('../../data/newGameBoard');

module.exports = class Game {
    users;
    gameBoard;

    constructor(user, gameBoard) {
        this.users = [user];
        this.gameBoard = gameBoard;
    }


    addUser(secondUser) {
        this.users.push(secondUser)
    }

    playMove(newGameBoard) {
        this.gameBoard = newGameBoard;
    }
}