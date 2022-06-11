const mongoose = require("mongoose");

// mongodb://localhost/
mongoose.connect(process.env.MONGO_DB);

const db = mongoose.connection;

db.on("err", console.error.bind(console, "Error in Connection of DB"));

db.once("open", function () {
  console.log("Connected to Database");
});

module.exports = db;
