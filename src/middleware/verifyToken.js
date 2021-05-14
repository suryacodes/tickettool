const { getTokenFromHeaders, decodeJWT } = require("../lib/util");

const auth = async (req, res, next) => {
  try {
    const token = getTokenFromHeaders(req);
    const { userId, user_type } = decodeJWT(token);
    var user;
    req.user = user;

    next();
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
