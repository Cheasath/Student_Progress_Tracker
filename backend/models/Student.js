const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  instructor: String,
  course: String,
  progress: String,
  grade: String,
});

module.exports = mongoose.model("Student", studentSchema);
