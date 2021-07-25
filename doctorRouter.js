const express = require('express');
const router = express.Router();
let Doctor = require('./doctor.model');
const doctorController = require('./doctorController')









router.post('/createRecords',doctorController.createRecords);
router.post('/getdocStatus',doctorController.getdocStatus);
router.post('/getRollWithSerialNumber',doctorController.getRollWithSerialNumber);



module.exports = router;