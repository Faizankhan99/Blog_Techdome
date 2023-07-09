const express = require("express");
const app = express.Router();
const user = require("../model/UserSchema");
const jwt = require("jsonwebtoken");

app.get("/", async (req, res) => {
  const userData = await user.find({});
  res.send(userData);
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(name, email, password)
  try {
    const Email = await user.findOne({ email });
    if (Email) {
      res.send({ status: false, message: "Email already exists" });
    } else {
      const userData = await user.create({ name, email, password });
      res.send({ status: true, message: "User created succefully", userData });
    }
  } catch (err) {
    res.send(err.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    let User = await user.findOne({ email, password });
    if (!User) {
      return res.status(401).send("User Not exist");
    }
    const token = jwt.sign({ id: User._id, email: User.email }, "SECRET1234", {
      expiresIn: "8 hours",
    });

    res.send({ message: "Login success", token });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = app;
