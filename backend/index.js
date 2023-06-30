require('dotenv').config({ path: '../.env' });
const connectToDB = require('./helper/db');
const express = require('express')
const cors = require('cors');

const home = require('./routes/home')
const about = require('./routes/about')
const verify_token = require('./routes/verify_token')

const app = express()
const port = process.env.PORT || 3002;

// Connect to the MongoDB database
connectToDB();

app.use(cors());

app.use(express.json());

//Routes
app.use(home);
app.use(about);
app.use(verify_token)

app.get('/', (req, res) => {
  res.send('Welcome Bumblebee!')
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


