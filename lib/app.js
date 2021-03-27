// const express = require('express');
// const app = express();

const createUser = require('./sockets/user/createUser')
const gameList = require('./sockets/game/gameList')
const createGame = require('./sockets/game/createGame')
const joinGame = require('./sockets/game/joinGame')



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

    socket.on("CREATE_GAME", user => createGame(user, socket, openGames))

    socket.on("JOIN_GAME", (user, gameId) => joinGame(user, gameId, openGames, socket, io))

    socket.on("CHECK_WORD", word => checkWord(word))

    socket.on("PLAY_WORD", newGameBoard => playWord(newGameBoard, io, socket))
})

// app.use(express.json());


// app.get('/check/:word', async (req, res) => {
//     const word = req.params.word
//     const formattedWord = word.toUpperCase();
//     let probability = {}
//     try {
//         const exists = dictionarySearch(formattedWord)
//         if (!exists) probability = wordProbability(formattedWord)
//         res.json({ exists, probability })
//     } catch (e) {
//         res.json(e.message)
//     }
// })

// app.use(require('./middleware/not-found'));
// app.use(require('./middleware/error'));

// module.exports = app;
