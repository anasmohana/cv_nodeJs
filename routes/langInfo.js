const { LangInfo, validate } = require("../models/langInfo");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const langInfo = await LangInfo.find();
  res.send(langInfo);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let langInfo = new LangInfo({
    title: req.body.title,
    level: req.body.level
  });
  langInfo = await langInfo.save();

  res.send(langInfo);
});

module.exports = router;
