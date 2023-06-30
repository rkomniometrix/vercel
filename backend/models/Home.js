const mongoose  = require('mongoose')
const { Schema, model } = mongoose;

const homeSchema = new Schema({
  salutation: String,
  name: String,
  title: String,
  imageUrl: String,
},
{
  timestamps: true
});

const Home = model('Home', homeSchema);

module.exports = Home;