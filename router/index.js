const express = require('express');
const router = express.Router();





router.get('/',(req, res) => {
    res.send(`<h1>POLLING API PROJECT</h1>
    <p>
    -	/questions/create  (To create a question)<br>
    -	/questions/:id/options/create  (To add options to a specific question)<br>
    -	/questions/:id/delete (To delete a question)<br>
    -	/options/:id/delete (To delete an option)<br>
    -	/options/:id/add_vote (To increment the count of votes)<br>
    -	/questions/:id (To view a question and it’s options<br>
    </p>`)
})


router.use('/',require('./api/pollingRoute'));



module.exports = router;