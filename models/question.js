const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    //include the array of ids of all options in this question itself
    options: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Options",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
