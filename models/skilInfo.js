const Joi = require("joi");
const mongoose = require("mongoose");

const skilInfoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  level: {
    type: String
  }
});

const SkilInfo = mongoose.model("SkilInfo", skilInfoSchema);

function validateSkilInfo(skilInfo) {
  const schema = {
    level: Joi.string(),
    title: Joi.string()
  };

  return Joi.validate(skilInfo, schema);
}

exports.SkilInfo = SkilInfo;
exports.validate = validateSkilInfo;
