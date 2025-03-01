const GameSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true,
  },
  isCorrect: { type: Boolean, required: true },
  timestamp: { type: Date, default: Date.now },
});

const GameSession = mongoose.model("GameSession", GameSessionSchema);

export default GameSession;
