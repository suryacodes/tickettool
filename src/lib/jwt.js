const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const generateJwt = function (userId, user_type) {
  return jwt.sign(
    {
      userId,
      user_type,
    },
    JWT_SECRET
  );
};

const decodeJWT = function (token) {
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded;
};

function getTokenFromHeaders(req) {
  const {
    headers: { authorization },
  } = req;

  if (authorization.startsWith("Bearer ")) {
    return authorization.substring(7, authorization.length);
  }
  return null;
}

module.exports = { generateJwt, decodeJWT, getTokenFromHeaders };
