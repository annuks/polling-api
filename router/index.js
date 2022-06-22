// calling express server
const express = require('express');

// fetching router from express server
const router = express.Router();    




// sending data to our home page
router.get('/',(req, res) => {
    res.send(`<h1 style="color:red;">POLLING API PROJECT</h1>
    <p>
    -	/questions/create  (To create a question) ----- You have to pass data in x-www-urlencoded format using <b>POST request</b><br>
    -	/questions/:id/options/create  (To add options to a specific question)  ----- You have to pass data in x-www-urlencoded format using <b>POST request</b><br>
    -	/questions/:id/delete (To delete a question) ----- You have to send url <b>DELETE request</b><br>
    -	/options/:id/delete (To delete an option)    ----- You have to send url <b>DELETE request</b><br>
    -	/options/:id/add_vote (To increment the count of votes)  ----- You have to send url <b>GET request</b><br>
    -	/questions/:id (To view a question and it’s options ----- You have to send url <b>GET request</b><br>
    </p>`)
})


// using all the api url using middleware
router.use('/',require('./api/pollingRoute'));


// exporting router
module.exports = router;