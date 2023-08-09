const router = require("express").Router(),
  { admin } = require("../controllers");

/**
 * @route api/admin/category
 * @methods POST
 * @access Private
 */
router.route("/category").post(admin.category.create);

module.exports = router;
