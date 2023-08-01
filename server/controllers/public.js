const { Profile } = require("../models");

/**
 * Retrieve profile of all creators
 * @param {*} req
 * @param {*} res
 * @returns {object}
 */
exports.getCreators = async (req, res) => {
  const creators = await Profile.find({ role: 1 });
  if (creators.length) return res.json(creators);

  const error = "There exists no profiles of creators.";
  return res.status(404).json(error);
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