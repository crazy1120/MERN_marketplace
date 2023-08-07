const router = require("express").Router(),
  { auth } = require("../controllers"),
  { validators, verifiers } = require("../middlewares");

/**
 * @route api/signUp
 * @method POST
 * @access Public
 */
router.post("/signUp", validators.signUp, auth.signUp);

/**
 * @route api/signIn
 * @method GET, POST
 * @access Public
 */
router
  .route("/signIn")
  .get(verifiers.auth, auth.getUser)
  .post(validators.signIn, auth.signIn);

module.exports = router;
