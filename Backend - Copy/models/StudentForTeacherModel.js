const mongoose = require('mongoose');

const StudentForTeacherSchema = new mongoose.Schema({
    inst_ID:{
        type:String,
        required:true
    },
    std_ID: {
        type: String,
        required: true,
        unique: true 
    },
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    classID: {
        type:String,
        required:true
    },    
     attendence:{
      type:String
  }

      
});

const studentForTeacherModel = mongoose.model("StudentForTeacher", StudentForTeacherSchema);

module.exports = studentForTeacherModel;
