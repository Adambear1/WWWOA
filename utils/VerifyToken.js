module.exports.VerifyToken = function (req, res, next) {
  console.log(req.headers);
  let bearerHeader = req.headers["authorization"];
  console.log(bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    let bearer = bearerHeader.split(" ");
    let bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};
