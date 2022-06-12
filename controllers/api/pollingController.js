const Question = require("../../models/question");
const Options = require("../../models/options");

module.exports.createQuestion =async (req, res) => {
    try{
        let question = await Question.create({
            content: req.body.content
        });


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

