const mongoose = require("mongoose");

const optionSchecma = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    vote: {
      type: Number,
      default: 0,
    },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
    link_to_vote: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

const Options = mongoose.model("Options", optionSchecma);

module.exports = Options;
