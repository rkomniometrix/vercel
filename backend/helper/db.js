require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

const {
  MONGO_DB_USERNAME,
  MONGO_DB_PASSWORD,
  MONGO_DB_DATABASE
} = process.env

const connectToDB = async () => {
  try {
    const uri = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@bumblebee.kltzaox.mongodb.net/${MONGO_DB_DATABASE}?retryWrites=true&w=majority`
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToDB;
