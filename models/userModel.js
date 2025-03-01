const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  score: { type: Number, default: 0 },
  gamesPlayed: { type: Number, default: 0 },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
