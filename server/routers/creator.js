const router = require("express").Router(),
  { creator } = require("../controllers"),
  { validators } = require("../middlewares");

/**
 * @route api/creator/deal
 * @methods GET, POST
 * @access Private
 */
router
  .route("/deal")
  .get(creator.getDeals)
  .post(validators.dealFormat, creator.createDeal);

module.exports = router;
