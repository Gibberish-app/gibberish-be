const newGameBoard = require('../../data/newGameBoard');
const { v4: uuidv4 } = require('uuid')

module.exports = class Game {
    users;
    gameBoard;
    gameId;

    constructor(user) {
        this.users = [user];
        this.gameBoard = newGameBoard;
        this.gameId = uuidv4();
    }


    addUser(secondUser) {
        console.log('AHHHHH!')
        this.users.push(secondUser)
    }

    playMove(newGameBoard) {
        this.gameBoard = newGameBoard;
    }

    returnId() {
        console.log('AHIHIHIHIIHI')
        return this.gameId
    }
}