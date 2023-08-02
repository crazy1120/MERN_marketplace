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
 * @route api/public/creators/:creator
 * @methods GET
 * @access Public
 */
router.route("/creators/:creator").get(public.getDeals);

/**
 * @route api/public/creators/:id
 * @methods PATCH
 * @access Private
 */
router.route("/creators/agree/:id").patch(verifiers.auth, public.agreeCreator);

module.exports = router;
