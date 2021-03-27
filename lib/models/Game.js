const newGameBoard = require('../../data/newGameBoard');

module.exports = class Game {
    users;
    gameBoard;

    constructor(row) {
        this.users = row.users;
        this.gameBoard = row.gameBoard;
    }

    static create(firstUser) {
        return new Game([firstUser], newGameBoard)
    }

    addUser(secondUser) {
        this.users.push(secondUser)
    }

    playMove(newGameBoard) {
        this.gameBoard = newGameBoard; x
    }
}