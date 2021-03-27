const newGameBoard = require('../../data/newGameBoard');
const tileBag = require('../../data/tileBag')
const { v4: uuidv4 } = require('uuid')

module.exports = class Game {
    users;
    gameBoard;
    gameId;
    bag;

    constructor(user) {
        this.users = [user];
        this.gameBoard = newGameBoard;
        this.gameId = uuidv4();
        this.bag = tileBag;
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