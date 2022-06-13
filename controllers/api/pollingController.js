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

        // finding id from params and fining data from database
        let question = await Question.findById(req.params.id);

        // if data found 
        if(question){
            
            let option = await Options.create({
                content : req.body.content,
                question : question 
            });

            question.options.push(option);
            question.save();
        
            return res.json(200, {
                message: "Option is Added to Question",
                data:  {
                    option: {
                        question: question.content,
                        content : option.content,
                        optionid: option._id,
                        questionid: question._id,
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