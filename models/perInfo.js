const Joi = require("joi");
const mongoose = require("mongoose");

const perInfoSchema = new mongoose.Schema({
  name: {
    type: String
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
    name: Joi.string(),
    address: Joi.string(),
    email: Joi.string(),
    mobile: Joi.number(),
    bDate: Joi.string()
  };

  return Joi.validate(perInfo, schema);
}

exports.PerInfo = PerInfo;
exports.validate = validatePerInfo;
