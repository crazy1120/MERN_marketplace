const { verifiers } = require("../middlewares");

const router = require("express").Router(),
  { public } = require("../controllers");

/**
 * @route api/public/creators
 * @methods GET
 * @access Private
 */
router.route("/creators").get(public.getCreators);

/**
 * @route api/public/creators/:id
 * @methods PATCH
 * @access Private
 */
router.route("/creators/:id").patch(verifiers.auth, public.agreeCreator);

module.exports = router;
