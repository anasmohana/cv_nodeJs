const express = require("express");
const perInfo = require("../routes/perInfo");
const courInfo = require("../routes/courInfo");
const eduInfo = require("../routes/eduInfo");
const expInfo = require("../routes/expInfo");
const langInfo = require("../routes/langInfo");
const skilInfo = require("../routes/skilInfo");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/perInfo", perInfo);
  app.use("/api/expInfo", expInfo);
  app.use("/api/eduInfo", eduInfo);
  app.use("/api/courInfo", courInfo);
  app.use("/api/skilInfo", skilInfo);
  app.use("/api/langInfo", langInfo);
};
