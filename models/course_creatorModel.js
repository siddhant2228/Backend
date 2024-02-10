// models/course.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the Course schema
const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  chapters: {
    type: Number,
    required: true,
  },
  noOfClasses: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['Personalised', 'Group'],
    required: true,
  },
  learnMode: {
    type: String,
    enum: ['assisted', 'self learning'],
    required: true,
  }
});

// Create the Course model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
