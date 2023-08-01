const { Deal, Profile } = require("../models");

/**
 * Retrieve deals of a creator who has authenticated
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.getDeals = async (req, res) => {
  const deals = await Deal.find({ creator: req.user });
  if (deals.length) return res.json(deals);

  const error = "Please create your first deal.";
  return res.status(404).json(error);
};

/**
 * Create a new deal with info which creator has sent
 * @param {*} req
 * @param {*} res
 * @returns {object}
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
  const deals = (await Deal.find({ creator: req.user._id })).length;
  await Profile.findOneAndUpdate({ email: req.user.email }, { deals });
  return res.json({ success: "Your deal has successfully registered." });
};

/**
 * Retrieve profile of a creator who has authenticated
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.getProfile = async (req, res) => {
  const profile = await Profile.findOne({ email: req.user.email });
  if (profile) {
    return res.json(profile);
  }
  const error = "Please edit and publish your profile.";
  return res.status(404).json(error);
};

/**
 * Create a new profile for creator
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.createProfile = async (req, res) => {
  const { name, birthday, email } = req.user;
  const { intro } = req.body;

  const profile = await Profile.findOne({ email });
  if (profile) {
    const error = "You have already published your profile.";
    return res.status(400).json({ error });
  }

  const newProfile = new Profile({ name, email, birthday, intro, role: 1 });
  await newProfile.save();
  return res.json({ success: "Your profile has successfully published." });
};
