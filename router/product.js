const express = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "product OK" });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Sever errol");
  }
});
module.exports = router;
