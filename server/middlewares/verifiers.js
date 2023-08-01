module.exports = {
  // Verify authenticate state and token
  auth: require("passport").authenticate("jwt", { session: false }),

  // Verify authorization
  admin: (req, res, next) => {
    if (req.user.level !== 0)
      return res.status(401).json({ error: "You are not a administrator." });
    else next();
  },
  creator: (req, res, next) => {
    if (req.user.level !== 1)
      return res.status(401).json({ error: "You are not a creator." });
    else next();
  },
  brand: (req, res, next) => {
    if (req.user.level !== 2)
      return res.status(401).json({ error: "You are not a brand." });
    else next();
  },
  buyer: (req, res, next) => {
    if (req.user.level !== 3)
      return res.status(401).json({ error: "You are not a buyer." });
    else next();
  },
};
