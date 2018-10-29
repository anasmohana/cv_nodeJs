const Joi = require("joi");
const mongoose = require("mongoose");

const langInfoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  level: {
    type: String
  }
});

const LangInfo = mongoose.model("LangInfo", langInfoSchema);

function validateLangInfo(langInfo) {
  const schema = {
    title: Joi.string(),
    level: Joi.string()
  };

  return Joi.validate(langInfo, schema);
}

exports.LangInfo = LangInfo;
exports.validate = validateLangInfo;
