


const userFeedBack = require('../model/questionschema');



const addFeedBackData = async (req, res) => {
  console.log(req.body);
  try{
    const answer = req.body;
    await userFeedBack.create(answer);
    res.status(200).json({message: "Question and Answer has been added successfully"});
    console.log("Question and Answer has been added successfully");
  }catch(error){
    res.status(500).json({message: error});
    console.log(error);
  }
};


const getUserFeedBack = async (req, res) => {
  
  await userFeedBack.find()
  .then((result) => {
    console.log(result);
    res.status(200).send(result);
  }).catch((error) => {
    console.log(error);
  })
}


exports.addFeedBackData = addFeedBackData;
exports.getUserFeedBack = getUserFeedBack;
