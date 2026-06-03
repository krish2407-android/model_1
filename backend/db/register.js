const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const register = mongoose.model("register", userSchema, "register");

module.exports = register;