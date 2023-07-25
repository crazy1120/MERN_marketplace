const router = require("express").Router(),
  ctrlers = require("../controllers").auth;

/**
 * @route POST api/signUp
 * @access Public
 */
router.post("/signUp", ctrlers.signUp);

module.exports = router;
