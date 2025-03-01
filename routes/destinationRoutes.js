const { Router } = require("express");
const controller = require("../controllers/destinationController");
const router = Router();

router.get("/get-all-destinations", controller.getAllDestinations);
module.exports = router;
