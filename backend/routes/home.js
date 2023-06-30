const express = require("express");
const Home = require("../models/Home");

const app = express();

app.get("/home", async (req, res) => {
  //Used to remove these keys {_id:0,createdAt:0, updatedAt:0}
  const home = await Home.findOne({},{_id:0,createdAt:0, updatedAt:0}).sort({ createdAt: -1 });
  try {
    res.send(home);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/home", async (req, res) => {
  const params = req.body;
  const home = await Home.create(params);
  try {
    res.send(home);
  } catch (error) {
    res.status(500).send(error);
  }
});



module.exports = app;