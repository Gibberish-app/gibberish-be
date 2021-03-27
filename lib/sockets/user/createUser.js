const User = require("../../models/User")

module.exports = ({ userName, avatar }, unmatchedUsers, socket) => {

    const newUser = new User(userName, avatar, socket.id)
    unmatchedUsers.push(newUser);

    socket.emit("USER_CREATED", newUser)
}