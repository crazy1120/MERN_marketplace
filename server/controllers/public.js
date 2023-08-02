const { Profile, Deal } = require("../models");

/**
 * Retrieve profile of all creators
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.getCreators = async (req, res) => {
  const creators = await Profile.find({ role: 1, deals: { $gt: 0 } });
  if (creators.length) return res.json(creators);

  const error = "There exists no profiles of creators.";
  return res.status(404).json(error);
};

/**
 * Retrieve deals of a creator
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.getDeals = async (req, res) => {
  try {
    const deals = await Deal.find({ creator: req.params.creator });
    if (deals.length) return res.json(deals);
  } catch (err) {
    return res.status(400).json(err);
  }
};

/**
 * Retrieve profile of all creators
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.agreeCreator = async (req, res) => {
  try {
    const creator = await Profile.findById(req.params.id);

    creator.followers.push(req.user.id);
    creator.likes = creator.followers.length;
    await Profile.findByIdAndUpdate(req.params.id, creator);

    return res.json(`You followed ${creator.name}`);
  } catch (err) {
    return res.status(400).json(err);
  }
};
