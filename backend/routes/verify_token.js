const speakeasy = require('speakeasy');
const express = require("express");

const app = express();

app.post("/verify_token", async (req, res) => {
  const params = req.body;
  const { token } = params;
  
  const verified = speakeasy.totp.verify({
    secret: process.env.SECRET_KEY,
    encoding: 'base32',
    token: token,
  });
  
  try {
    if(verified){
      res.send(verified)
    }
    else{
      res.send(verified)
    }
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = app;