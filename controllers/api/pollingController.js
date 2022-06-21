// calling Database models
const Question = require("../../models/question");
const Options = require("../../models/options");



// controller for creating a question
module.exports.createQuestion =async (req, res) => {
    try{

        // storing question from post request
        let question = await Question.create({
            content: req.body.content
        });

        // Sending Response if data storage is successful
        return res.json(200, {
            message: 'Question is Created and stored in Database',
            data:  {
                question: {
                    content : question.content,
                    id: question._id
                }
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
};



//  controller for deleting a question
module.exports.destroyQuestion = async (req,res) => {
    try{

        // finding id from params and fining data from database
        let question = await Question.findById(req.params.id);

        // if data found 
        if(question){
            question.remove();
            await Options.deleteMany({question: req.params.id});
            return res.json(200, {
                message: "Question and Associated Options are Deleted!"
            });
            
        // if data not found 
        }else{
            return res.json(404, {
                message: "Question with Given Id is Not in Database"
            });
        }
    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}




// controller for adding option to a question
module.exports.addOptionToQuestion = async (req,res) => {
    try{

        WEB_URL = process.env.WEB_URL;
        // finding id from params and fining data from database
        let question = await Question.findById(req.params.id);

        // if data found 
        if(question){
            
            let option = await Options.create({
                content : req.body.content,
                question : question,
            });
            option.link_to_vote = `${WEB_URL}/options/${option._id}/add_vote`
            option.save();

            question.options.push(option);
            question.save();
        
            return res.json(200, {
                message: "Option is Added to Question",
                data:  {
                    option: {
                        question: question.content,
                        questionid: question._id,
                        option : option.centent,
                        link_to_vote : option.link_to_vote
                    }
                }
            });
        // if data not found 
        }else{
            return res.json(404, {
                message: "Question with Given Id is Not in Database"
            });
        }
    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}




//  controller for deleting a option from a question
module.exports.destroyOption = async (req,res) => {
    try{

        // finding id from params and fining data from database
        let option = await Options.findById(req.params.id);

        // if data found 
        if(option){
            let quesId = option.question;
            let question =await Question.findByIdAndUpdate(quesId , { $pull: {options: req.params.id}});
            option.remove();

            
            return res.json(200, {
                message: "Option and Question option Associated with Options are Deleted!"
            });
        // if data not found 
        }else{
            return res.json(404, {
                message: "Option with Given Id is Not in Database"
            });
        }
    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}



//  controller for adding vote to a option for a question
module.exports.addVote = async (req,res) => {
    try{

        // finding id from params and fining data from database
        let option = await Options.findById(req.params.id);

        // if data found 
        if(option){
            option.vote += 1;
            option.save();

            
            return res.json(200, {
                message: "Vote to a option for a question is added"
            });
        // if data not found 
        }else{
            return res.json(404, {
                message: "Option with Given Id is Not in Database"
            });
        }
    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}




// controller for view a question and associated option
module.exports.viewQuestionWithOptions =async (req,res) => {
    try {

        // finding id from params and fining data from database
        let question = await Question.findById(req.params.id)
        .populate('options')
        if(question){
            return res.json(200, {
                message : "Question and associated options",
                data : question
            })
        }
        // if data not found 
        else{
            return res.json(500,{
                message : "Quetion with Provided Id Not Found",
            })
        }


        
    } catch (error) {
        console.log(`***** ${error}`);
        return res.json(500 , {
            message: "Internal Server Error"
        })
    }
}

// controller for view all question and its ids
module.exports.viewQuestion =async (req,res) => {
    try {

        // finding all question from from database
        let question = await Question.find({})
        .populate('options')
        if(question){
            return res.json(200, {
                message : "Question and associated options",
                data : question
            })
        }
        // if data not found 
        else{
            return res.json(500,{
                message : "Quetion Not Found",
            })
        }


        
    } catch (error) {
        console.log(`***** ${error}`);
        return res.json(500 , {
            message: "Internal Server Error"
        })
    }
}
