const mongoose  = require('mongoose')
const { Schema, model } = mongoose;

const projectsSchema = new Schema({
  title: String,
  subTitle: String
});

const Projects = model('Projects', projectsSchema);

module.exports = Projects;