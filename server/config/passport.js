const passport = require("passport"),
  { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const User = require("../models/User");
const keys = require("./keys");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.secretOrKey,
};

module.exports = (passport) =>
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) return done(null, user);
        else return done(null, false);
      } catch (err) {
        console.log(err);
      }
    })
  );
