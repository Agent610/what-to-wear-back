const jwt = require("jsonwebtoken");
const { INCORRECT } = require("../utils/errors.js");
const { JWT_SECRET } = require("../utils/config.js");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer")) {
    return res.status(INCORRECT).send({ message: "Error in Authorization" });
  }

  const token = authorization.replace("Bearer", "");
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(INCORRECT).send({ message: "Error in Authorization" });
  }

  req.user = payload;
  return next();
};

module.exports = auth;
