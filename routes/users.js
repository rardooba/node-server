const express = require("express");

const router = express.Router();

// /users
router.get("/", (req, res) => {
  res.status(200).json({ message: "Sachiburidanaaa !" });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json({ id });
});

router.get("/:id/:character", (req, res) => {
  const id = req.params.id;
  const character = req.params.character;

  res.status(200).json({ id, character});
});

module.exports = router;
