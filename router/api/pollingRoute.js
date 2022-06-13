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


module.exports = router;
