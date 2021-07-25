const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());


const doctorRouter = require('./doctorRouter')  


console.log('test')
app.use('/api/v2/doctor', doctorRouter);






module.exports = app;

