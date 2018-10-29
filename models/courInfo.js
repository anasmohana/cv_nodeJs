const Joi = require("joi");
const mongoose = require("mongoose");

const courInfoSchema = new mongoose.Schema({
  fromDate: {
    type: String
  },
  toDate: {
    type: String
  },
  title: {
    type: String
  },
  desc: {
    type: String
  }
});

const CourInfo = mongoose.model("CourInfo", courInfoSchema);

function validateCourInfo(courInfo) {
  const schema = {
    desc: Joi.string()
      .min(5)
      .max(50)
      .required(),
    fromDate: Joi.string(),
    toDate: Joi.string(),
    title: Joi.string()
  };

  return Joi.validate(courInfo, schema);
}

exports.CourInfo = CourInfo;
exports.validate = validateCourInfo;
