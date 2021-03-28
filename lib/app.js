require('dotenv').config();
const app = require('express');

const createUser = require('./sockets/user/createUser')
const gameList = require('./sockets/game/gameList')
const createGame = require('./sockets/game/createGame')
const joinGame = require('./sockets/game/joinGame')
const checkWord = require('./sockets/word/checkWord')
const playWord = require('./sockets/game/playWord')
const disconnectUser = require('./sockets/user/disconnectUser')



const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: process.env.CORS_ORIGIN
    }
});

const unmatchedUsers = [];
const openGames = [];

io.on('connection', socket => {

    socket.on("CREATE_USER", userInfo => createUser(userInfo, unmatchedUsers, socket))

    socket.on("GAME_LIST", () => gameList(socket, openGames));

    socket.on("CREATE_GAME", currentUser => createGame(currentUser, socket, openGames))

    socket.on("JOIN_GAME", ({ user, gameId }) => joinGame(user, gameId, openGames, socket, io))

    socket.on("CHECK_WORD", ({ tileArray, gameState }) => checkWord(tileArray, gameState, socket, io))

    socket.on("PLAY_WORD", gameState => playWord(gameState, io, socket))

    socket.on("WIN_GAME", gameId => winGame(io, gameId));

    socket.on('disconnecting', () => disconnectUser(socket, io, openGames))
})

module.exports = { http }
