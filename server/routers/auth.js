const router = require("express").Router(),
  ctrlers = require("../controllers").auth,
  { validators } = require("../middlewares");

/**
 * @route POST api/signUp
 * @access Public
 */
router.post("/signUp", validators.signUp, ctrlers.signUp);

/**
 * @route POST api/signIn
 * @access Public
 */
router.post("/signIn", validators.signIn, ctrlers.signIn);

module.exports = router;
