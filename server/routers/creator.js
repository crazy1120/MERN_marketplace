const router = require("express").Router(),
  { creator } = require("../controllers"),
  { validators, verifiers } = require("../middlewares");

/**
 * @route api/creator/deal
 * @methods GET, POST
 * @access Private
 */
router
  .route("/deal")
  .get(creator.getDeals)
  .post(validators.dealFormat, creator.createDeal);

/**
 * @route api/creator/profile
 * @methods GET, POST
 * @access Private
 */
router.route("/profile").get(creator.getProfile).post(creator.createProfile);

module.exports = router;
