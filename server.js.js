const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')




require('dotenv').config();
const app = require('./app')



const port = process.env.PORT || 5000;


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true,  useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("mongo db connected");
})



const server = app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
}) 

