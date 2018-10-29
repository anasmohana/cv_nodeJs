const { CourInfo, validate } = require("../models/courInfo");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const courInfo = await CourInfo.find();
  res.send(courInfo);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let courInfo = new CourInfo({
    fromDate: req.body.fromDate,
    toDate: req.body.toDate,
    title: req.body.title,
    desc: req.body.desc
  });
  courInfo = await courInfo.save();

  res.send(courInfo);
});

module.exports = router;
