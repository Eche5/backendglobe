const Destinations = require("../models/destinationModel");

exports.getAllDestinations = async (req, res) => {
  try {
    const AllDestinations = await Destinations.find();
    if (AllDestinations.length === 0) {
      return res.status(404).json({ message: "No destinations found" });
    } else {
      return res.status(200).json(AllDestinations);
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
