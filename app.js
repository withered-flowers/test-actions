const express = require("express");
const app = express();

const { User } = require("./models/index");

app.get("/", async (req, res) => {
  res.status(200).json({ msg: "Hello World" });
});

app.get("/user", async (req, res) => {
  try {
    const response = await User.findAll();

    res.status(200).json({ data: response });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = app;
