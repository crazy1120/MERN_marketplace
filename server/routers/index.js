const router = require("express").Router();

router.use("/", require("./auth"));

module.exports = router;
