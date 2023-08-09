const router = require("express").Router();
const { verifiers } = require("../middlewares");

router.use("/", require("./auth"));

router.use("/creator", verifiers.auth, verifiers.creator, require("./creator"));

router.use("/brand", verifiers.auth, verifiers.brand, require("./brand"));

router.use("/public", require("./public"));

router.use("/admin", require("./admin"));

module.exports = router;
