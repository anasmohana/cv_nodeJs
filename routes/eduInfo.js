const { EduInfo, validate } = require("../models/eduInfo");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const eduInfo = await EduInfo.find();
  res.send(eduInfo);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let eduInfo = new EduInfo({
    fromDate: req.body.fromDate,
    toDate: req.body.toDate,
    university: req.body.university,
    title: req.body.title,
    desc: req.body.desc
  });
  eduInfo = await eduInfo.save();

  res.send(eduInfo);
});

module.exports = router;
