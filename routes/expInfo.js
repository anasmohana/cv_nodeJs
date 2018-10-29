const { ExpInfo, validate } = require("../models/expInfo");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const expInfo = await ExpInfo.find();
  res.send(expInfo);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let expInfo = new ExpInfo({
    fromDate: req.body.fromDate,
    toDate: req.body.toDate,
    company: req.body.company,
    title: req.body.title,
    desc: req.body.desc
  });
  expInfo = await expInfo.save();

  res.send(expInfo);
});

module.exports = router;
