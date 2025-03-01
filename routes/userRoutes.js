const { Router } = require("express");
const controller = require("../controllers/userController");
const router = Router();
router.post("/signup", controller.createUser);

router.post("/login", controller.loginUser);

router.post("/update", controller.updateUser);

router.get("/get-all-users", controller.getLeaderBoard);

module.exports = router;
