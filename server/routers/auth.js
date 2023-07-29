const router = require("express").Router(),
  { auth } = require("../controllers"),
  { validators } = require("../middlewares");

/**
 * @route POST api/signUp
 * @access Public
 */
router.post("/signUp", validators.signUp, auth.signUp);

/**
 * @route POST api/signIn
 * @access Public
 */
router.post("/signIn", validators.signIn, auth.signIn);

module.exports = router;
