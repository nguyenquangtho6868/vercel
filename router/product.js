const express = require("express");
const router = express.Router();
const productControler = require("../controller/product");
router.get("/", productControler.getProduct);
module.exports = router;
