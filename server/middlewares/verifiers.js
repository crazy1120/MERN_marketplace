module.exports = {
  // Verify authenticate state and token
  auth: require("passport").authenticate("jwt", { session: false }),
};
