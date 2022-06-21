// calling mongoose
const mongoose = require("mongoose");

// creating question schema
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
        ref: "Options",                   //relating Options models
      },
    ],
  },
  {
    timestamps: true,
  }
);


// telling mogoose about schema
const Question = mongoose.model("Question", questionSchema);


// exporting the database schema
module.exports = Question;
