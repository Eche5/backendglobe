const User = require("../models/userModel.js");

exports.createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const existingusername = await User.findOne({ username });
    console.log(existingusername);
    if (existingusername) {
      return res.status(400).json({ message: "Username already exists" });
    } else {
      const user = await User.create({ username });
      return res.status(201).json(user);
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username } = req.body;
    const existingusername = await User.findOne({ username });

    if (!existingusername) {
      return res.status(400).json({ message: "Username does already exists" });
    } else {
      return res.status(201).json(existingusername);
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { username, score } = req.body;

    if (!username || score === undefined) {
      return res
        .status(400)
        .json({ message: "Username and score are required" });
    }

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (score) {
      user.score = score;
    }

    user.gamesPlayed = (user.gamesPlayed || 0) + 1;

    await user.save();

    return res.status(200).json({ message: "User score updated", user });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getLeaderBoard = async (req, res) => {
  try {
    const AllUsers = await User.find().sort({ score: -1 }); // Sort by score in descending order

    if (AllUsers.length === 0) {
      return res.status(404).json({ message: "No user found" });
    } else {
      return res.status(200).json(AllUsers);
    }
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
