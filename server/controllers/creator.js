const { Deal } = require("../models");

/**
 * Retrieve deals of a creator who has authenticated
 * @param {*} req - Request from frontend containing sign and filtering infos
 * @param {*} res - Response from server containing array of matched deals of a creator
 * @returns {object} - Response object
 */
exports.getDeals = async (req, res) => {
  const creator = req.user._id;

  const deals = await Deal.find({ creator: req.user });
  if (deals) return res.json(deals);
};

/**
 * Create a new deal with info which creator has sent
 * @param {*} req - Request from frontend containing deal infos
 * @param {*} res - Response from server containing success or error msg
 * @returns {object} - Response object
 */
exports.createDeal = async (req, res) => {
  const creator = req.user._id,
    { title, desc, price } = req.body;

  const deal = await Deal.findOne({ creator, title });
  if (deal) {
    const error = "You have already posted such deal.";
    return res.status(400).json({ error });
  }

  const newDeal = new Deal({ creator, title, desc, price });
  await newDeal.save();
  return res.json({ success: "Your deal has successfully registered." });
};
