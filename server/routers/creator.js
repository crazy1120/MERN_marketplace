const router = require("express").Router(),
  { creator } = require("../controllers");

/**
 * @route POST api/creator/deal
 * @access Private
 */
router.route("/deal").post(creator.createDeal);

module.exports = router;
