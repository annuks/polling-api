const express = require("express");         //fetching express 
const router = express.Router();            //fetching roter from express 

// calling post controller
const pollingController = require("../../controllers/api/pollingController");




// router for adding a question
router.post("/questions/create", pollingController.createQuestion);

// router for deleting a question
router.delete("/questions/:id/delete", pollingController.destroyQuestion);

//router for adding a option
router.post("/questions/:id/options/create",pollingController.addOptionToQuestion);

// router for deleting an option from a questiom
router.delete("/options/:id/delete", pollingController.destroyOption);

// router for adding vote to an option from a questiom
router.get("/options/:id/add_vote", pollingController.addVote);

// router for viewing question and its options
router.get("/questions/:id", pollingController.viewQuestionWithOptions);

// royter for viewing all question and its id
router.get("/questions", pollingController.viewQuestion);


// exporting router
module.exports = router;
