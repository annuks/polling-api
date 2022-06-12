const express = require('express');
const router = express.Router();
const pollingController = require('../../controllers/api/pollingController')




router.post('/questions/create',pollingController.createQuestion)





module.exports = router;