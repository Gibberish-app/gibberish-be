
module.exports = (socket, io, openGames) => {

    const room = socket.rooms;

    console.log("🚀 ~ file: disconnectUser.js ~ line 6 ~ room ", room)


    const gameIndex = openGames.findIndex(game => game.gameId === room)

    io.sockets.in(room).emit("PLAYER_LEFT", null)
}