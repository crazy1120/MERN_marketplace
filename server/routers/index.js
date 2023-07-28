const router = require("express").Router();
const { verifiers } = require("../middlewares");

router.use("/", require("./auth"));
router.use("/creator", verifiers.auth, verifiers.creator, require("./creator"));

module.exports = router;
