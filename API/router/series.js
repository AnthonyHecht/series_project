const express = require("express");
const router = express.Router();

const serieCtrl = require("../controllers/series")
const auth = require("../middleware/auth")
const multer = require("../middleware/multer")

router.get("/", serieCtrl.getSeries);
router.get("/:id", serieCtrl.getSerie);
router.post("/", auth, multer, serieCtrl.createSerie);

module.exports = router;