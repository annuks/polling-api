// calling express server
const express = require('express');

// fetching router from express server
const router = express.Router();    




// sending data to our home page
router.get('/',(req, res) => {
    res.send(`<h1 style="color:red;">POLLING API PROJECT</h1>
    <p>
    -	/questions/create  (To create a question)<br>
    -	/questions/:id/options/create  (To add options to a specific question)<br>
    -	/questions/:id/delete (To delete a question)<br>
    -	/options/:id/delete (To delete an option)<br>
    -	/options/:id/add_vote (To increment the count of votes)<br>
    -	/questions/:id (To view a question and it’s options<br>
    </p>`)
})


// using all the api url using middleware
router.use('/',require('./api/pollingRoute'));


// exporting router
module.exports = router;