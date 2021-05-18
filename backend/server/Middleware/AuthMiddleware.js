const UtilsJwt = require("../utils/jwt");

module.exports = {
  async TokenMiddleware(req, res, next) {
    if (!req.headers.authorization) {
      res.json(400, { error: "no token provide" });
    }
    try {
      const [, token] = req.headers.authorization.split(" ");
      const userId = await UtilsJwt.decript(token);
      if (userId) {
        res.locals.user = userId;
        next();
      }
    } catch (error) {
      res.json(400, { error: error.message });
    }
  },
};
