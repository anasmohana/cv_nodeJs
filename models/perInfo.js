const Joi = require("joi");
const mongoose = require("mongoose");

const perInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: Number
  },
  bDate: {
    type: String
  }
});

const PerInfo = mongoose.model("PerInfo", perInfoSchema);

function validatePerInfo(perInfo) {
  const schema = {
    fname: Joi.string()
      .min(5)
      .max(50)
      .required()
  };

  return Joi.validate(perInfo, schema);
}

exports.PerInfo = PerInfo;
exports.validate = validatePerInfo;
