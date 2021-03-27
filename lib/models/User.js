

module.exports = class User {
    userName;
    avatar;
    socketId;
    score;

    constructor(userName, avatar, socketId) {
        this.userName = userName;
        this.avatar = avatar;
        this.socketId = socketId;
        this.score = 0;
    }

    returnSocketId() {
        return socketId
    }

    updateScore(score) {
        this.score = score;
    }
}