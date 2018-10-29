const { SkilInfo, validate } = require("../models/skilInfo");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const skilInfo = await SkilInfo.find();
  res.send(skilInfo);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let skilInfo = new SkilInfo({
    level: req.body.level,
    title: req.body.title
  });
  skilInfo = await skilInfo.save();

  res.send(skilInfo);
});

module.exports = router;
