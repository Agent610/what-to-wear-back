const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config.js");
const UnauthorizedError = require("../utils/UnauthorizedError.js");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer")) {
    return next(new UnauthorizedError("Error in Authorization"));
  }

  const token = authorization.replace("Bearer", "");
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new UnauthorizedError("Error in Authorization"));
  }

  req.user = payload;
  return next();
};

module.exports = auth;
