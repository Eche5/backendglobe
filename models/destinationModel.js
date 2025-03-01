const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const DestinationSchema = new Schema({
  city: { type: String, required: true, },
  country: { type: String, required: true },
  clues: { type: [String], required: true },
  fun_fact: { type: [String], required: true },
  trivia: { type: [String], required: true },
});

const Destination = mongoose.model("Destination", DestinationSchema);

module.exports = Destination;
