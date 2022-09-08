const express = require("express");
const router = express.Router();
const {getProducts} = require("../controllers/auth")

router.route("/auth").post(getProducts)

module.exports = router;