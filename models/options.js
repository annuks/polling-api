// calling  mongoose
const mongoose = require("mongoose");


// creating option schema
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
      ref: "Question",                          //relating Question models
    },
    link_to_vote: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);


// telling mogoose about schema
const Options = mongoose.model("Options", optionSchecma);


// exporting the database schema
module.exports = Options;
