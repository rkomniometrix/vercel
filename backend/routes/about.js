const express = require("express");
const About = require("../models/About");

const app = express();

app.get("/about", async (req, res) => {
  //Used to remove these keys {_id:0,createdAt:0, updatedAt:0}
  const about = await About.findOne({},{_id:0,createdAt:0, updatedAt:0}).sort({ createdAt: -1 });
  try {
    res.send(about);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/about", async (req, res) => {
  const params = req.body;
  const about = await About.create(params);
  try {
    res.send(about);
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = app;