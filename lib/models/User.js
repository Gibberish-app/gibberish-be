

module.exports = class User {
    userName;
    avatar;
    socketId;

    constructor(userName, avatar, socketId) {
        this.userName = userName;
        this.avatar = avatar;
        this.socketId = socketId
    }

    returnSocketId() {
        return socketId
    }

}