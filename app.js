const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use("/api/v1/user", userRoutes);
app.use("/api/v1", destinationRoutes);

module.exports = app;
