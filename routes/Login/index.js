require("dotenv").config();
const router = require("express").Router();
const db = require("../../models");
const jwt = require("jsonwebtoken");
const { VerifyToken } = require("../../utils/VerifyToken");

router.post("/create", ({ body }, res) => {
  db.create(body).then((data) => {
    res.json(data);
  });
});
router.post("/validate", ({ body }, res) => {
  db.findOne(body)
    .then((data) => {
      if (data) {
        jwt.sign(
          {
            body,
          },
          process.env.SECRET,
          (err, token) => {
            res.json({
              token,
            });
          }
        );
      } else {
        res.status(403).json({ err: "Invalid User" });
      }
    })
    .catch((err) => {
      res.status(403).json({ err });
    });
});
router.post("/", VerifyToken, ({ token }, res) => {
  console.log(token);
  jwt.verify(
    token,
    process.env.SECRET,
    { expiresIn: "1m" },
    (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          msg: "API",
          authData,
        });
      }
    }
  );
});

module.exports = router;
