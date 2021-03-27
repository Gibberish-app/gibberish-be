const newGameBoard = require('../../data/newGameBoard');

module.exports = class Game {
    users;
    gameBoard;

    constructor(user) {
        this.users = [user];
        this.gameBoard = newGameBoard;
    }


    addUser(secondUser) {
        this.users.push(secondUser)
    }

    playMove(newGameBoard) {
        this.gameBoard = newGameBoard;
    }
}