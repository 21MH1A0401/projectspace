const mongoose = require('mongoose');

const userFeedBack = new mongoose.Schema({
    question_one: {
        type: String,
        require: true,
    },
    question_two: {
        type: String,
        require: true
    },
    question_three: {
        type: String,
        require: true
    },
    question_four: {
        type: String,
        require: true
    },
  });

module.exports = mongoose.model('userfeedback', userFeedBack);