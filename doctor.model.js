const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    DucCode:{
        type: String,
        trim:true,
        required:true,
        unique:true
    },
    SerialNumber:{
        type: String,
        trim:true,
        required:true,
        unique:true

    },
    Status:{
        type: String,
        trim:true,
        required:true
    }
},{
    timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema)

module.exports = Doctor;