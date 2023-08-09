const { Category } = require("../../models");

/**
 * Create a new category
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
const create = async (req, res) => {
  const { title } = req.body;
  const category = await Category.findOne({ title });
  if (category) {
    const error = "Such category already exists.";
    return res.status(400).json({ error });
  }

  const newCategory = new Category({ title });
  await newCategory.save();
  return res.json({ success: "New category has created." });
};

module.exports = {
  create,
};
