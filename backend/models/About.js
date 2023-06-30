const mongoose  = require('mongoose')
const { Schema, model } = mongoose;

const aboutSchema = new Schema({
  salutation: String,
  title: String,
  description: String,
},{
  timestamps: true
});

const About = model('About', aboutSchema);

module.exports = About;