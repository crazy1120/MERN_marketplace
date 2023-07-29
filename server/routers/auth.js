const router = require("express").Router(),
  { auth } = require("../controllers"),
  { validators } = require("../middlewares");

/**
 * @route api/signUp
 * @method POST
 * @access Public
 */
router.post("/signUp", validators.signUp, auth.signUp);

/**
 * @route api/signIn
 * @method POST
 * @access Public
 */
router.post("/signIn", validators.signIn, auth.signIn);

module.exports = router;
