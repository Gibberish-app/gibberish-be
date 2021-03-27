// const express = require('express');
// const app = express();

const dictionarySearch = require('./utils/dictionarySearch');
const wordProbability = require('./utils/wordProbability');

const createUser = require('./sockets/user/createUser')
const createGame = require('./sockets/game/createGame')



const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: process.env.CORS_ORIGIN
    }
});

const unmatchedUsers = [];
const gameArray = [];

io.on('connection', socket => {

    socket.on("CREATE_USER", userInfo => createUser(userInfo, unmatchedUsers, socket))

    socket.on("CREATE_GAME", user => createGame(user, gameArray))



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
