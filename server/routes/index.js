const router = require("express").Router();

router.use("/auth", require("./auth"));

module.exports = router;
