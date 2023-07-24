const router = require("express").Router();

router.get("/auth", (req, res) => res.json("auth works"));

module.exports = router;
