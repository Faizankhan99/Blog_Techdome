const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Routes/User_route");
const BLog = require("./Routes/Blog_route");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("hello"));
app.use("/users", User);
app.use("/blogs", BLog);
app.listen(8080, async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Users");
  console.log("server started on port 8080");
});
