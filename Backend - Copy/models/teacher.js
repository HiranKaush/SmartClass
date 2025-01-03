const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  instituteId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  classId:{
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Teacher", teacherSchema);
