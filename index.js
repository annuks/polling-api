require('dotenv').config();           //to fetch local environment variables
const express = require("express");       //fetching express
const app = express();
const PORT = 8000;                      //port to run on local server
const db = require('./config/mongoose');      //calling mongoose config for database mongodb



// to encode url to fetch data from form body
app.use(express.urlencoded());


// Binding Router Folder to use routes
app.use("/", require("./router"));



// Starting server
app.listen(process.env.PORT || PORT, (err) => {
  if (err) {
    console.log("Error in Running Express Server");           //if error occur while running server
  }
  console.log(`Server is Running on Port ${PORT}`);
});
