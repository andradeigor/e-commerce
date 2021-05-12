const UtilsJwt = require("../utils/jwt");

module.exports = {
  async TokenMiddleware(req, res, next) {
    const [, token] = req.headers.authorization.split(" ");
    const userId = await UtilsJwt.decript(token);
    if (userId) {
      console.log("passei aqui");
      res.locals.user = userId;
      next();
    } else {
      res.sendStatus(401);
    }
  },
};
