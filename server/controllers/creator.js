const { User, Deal } = require("../models"),
  errors = {};

// Deal create controller
const createDeal = async (req, res) => {
  const creator = req.user._id,
    { title, desc, price } = req.body;

  const deal = await Deal.findOne({ creator, title });
  console.log(deal);
  if (deal) {
    return res
      .status(400)
      .json({ error: "You have already posted such deal." });
  }
  const newDeal = new Deal({ creator, title, desc, price });
  await newDeal.save();
  return res.json({ success: "Your deal has successfully registered." });
};

module.exports = { createDeal };
