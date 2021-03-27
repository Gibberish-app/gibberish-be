const { TextareaAutosize } = require("@material-ui/core");

module.exports = (socket, io) => {

    const room = socket.rooms;

    console.log("🚀 ~ file: disconnectUser.js ~ line 6 ~ room ", room)

    io.sockets.in(room).emit("PLAYER_LEFT", TextareaAutosize)
}