const Joi = require("joi");
const mongoose = require("mongoose");

const eduInfoSchema = new mongoose.Schema({
  fromDate: {
    type: String
  },
  toDate: {
    type: String
  },
  university: {
    type: String
  },
  title: {
    type: String
  },
  desc: {
    type: String
  }
});

const EduInfo = mongoose.model("EduInfo", eduInfoSchema);

function validateEduInfo(eduInfo) {
  const schema = {
    title: Joi.string()
      .min(5)
      .max(50)
      .required(),
    fromDate: Joi.string(),
    toDate: Joi.string(),
    university: Joi.string(),
    desc: Joi.string()
  };

  return Joi.validate(eduInfo, schema);
}

exports.EduInfo = EduInfo;
exports.validate = validateEduInfo;
