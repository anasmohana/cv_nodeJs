const { PerInfo, validate } = require("../models/perInfo");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const perInfo = await PerInfo.find();
  res.send(perInfo);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let perInfo = new PerInfo({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
    bDate: req.body.bDate
  });
  perInfo = await perInfo.save();

  res.send(perInfo);
});

module.exports = router;
