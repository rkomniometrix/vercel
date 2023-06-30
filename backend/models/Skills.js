const mongoose  = require('mongoose')
const { Schema, model } = mongoose;

const skillsSchema = new Schema({
  title: String,
  slug: String,
  published: Boolean,
  author: String,
});

const Skills = model('Skills', skillsSchema);

module.exports = Skills;