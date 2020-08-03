const employeeController = require('../controllers/employeeController');
const express = require('express');
const router = express.Router();

router.get(
    '/get',
    employeeController.dictionaryDataGet
);


module.exports =router;