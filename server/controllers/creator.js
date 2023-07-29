const { Deal } = require("../models");

// Deal retrieve controller
exports.getDeals = async (req, res) => {
  const creator = req.user._id;

  const deals = await Deal.find({ creator: req.user });
  if (deals) return res.json(deals);
};

// Deal create controller
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
