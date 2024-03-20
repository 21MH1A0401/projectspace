
const express = require('express');
const Router = express.Router();

const QueryController = require('../controllers/querycontroller');


Router.post('/api/add-feedback-data', QueryController.addFeedBackData);
Router.get('/api/get-userfeedback', QueryController.getUserFeedBack);

module.exports = Router;