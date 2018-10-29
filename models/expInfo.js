const Joi = require("joi");
const mongoose = require("mongoose");

const expInfoSchema = new mongoose.Schema({
  fromDate: {
    type: String
  },
  toDate: {
    type: String
  },
  company: {
    type: String
  },
  title: {
    type: String
  },
  desc: {
    type: String
  }
});

const ExpInfo = mongoose.model("ExpInfo", expInfoSchema);

function validateExpInfo(expInfo) {
  const schema = {
    desc: Joi.string()
      .min(5)
      .max(50)
      .required(),
    fromDate: Joi.string(),
    toDate: Joi.string(),
    company: Joi.string(),
    title: Joi.string()
  };

  return Joi.validate(expInfo, schema);
}

exports.ExpInfo = ExpInfo;
exports.validate = validateExpInfo;
