const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    nickname: {
        type: String,
    },

    email: {
        type: String,
    },

    password: {
        type: String,
    },

    country: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now,
    },
})

userSchema.method.generateJWT = function () {
    return jwt.sign(
        {
            _id: this._id,
            nickname: this.nickname,
            email: this.email,
        },
        "secretKey"
    );
};

const User = mongoose.model("user", userSchema);
module.exports.User = User;