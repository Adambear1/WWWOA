require("dotenv").config();
const router = require("express").Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const { VerifyToken } = require("../utils/VerifyToken");

router.post("/create", ({ body }, res) => {
  db.create(body).then((data) => {
    res.json(data);
  });
});
router.post("/validate", ({ body }, res) => {
  console.log(body);
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
        res.setStatus(403);
      }
    })
    .catch((err) => {
      res.setStatus(403);
    });
});
router.post("/", VerifyToken, ({ token }, res) => {
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
