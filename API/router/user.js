const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");

//login logout routes
router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.get("/logout", userCtrl.logout);

// User routes
router.get("/", auth, userCtrl.getAllUsers);
router.get("/:id", auth, userCtrl.getUser);

module.exports = router;