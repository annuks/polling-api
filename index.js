require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 8000;
const db = require('./config/mongoose');


app.use(express.urlencoded());


// Binding Router Folder to use routes
app.use("/", require("./router"));



// Starting server
app.listen(process.env.PORT || PORT, (err) => {
  if (err) {
    console.log("Error in Running Express Server");
  }
  console.log(`Server is Running on Port ${PORT}`);
});
