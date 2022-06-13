const express = require("express");
const router = express.Router();

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


module.exports = router;
