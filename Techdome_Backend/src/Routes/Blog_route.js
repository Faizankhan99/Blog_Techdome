const { Router } = require("express");
const app = Router();
const blog = require("../model/BlogSchema");

app.get("/", async (req, res) => {
  try {
    const Blog = await blog.find({});
    res.status(200).send(Blog);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

app.post("/", async (req, res) => {
  const { heading, content, author, imgUrl } = req.body;
  try {
    const Blog = await blog.create({
      heading,
      content,
      author,
      imgUrl,
    });
    res.send({ message: "BLog created succesfully" });
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let Blog = await blog.findOne({ _id: id });
    if (Blog) {
      Blog = await blog.deleteOne({ _id: id });
      res.send("Blog deleted sucessfull");
    } else {
      res.send("BLog not found");
    }
  } catch (error) {
    res.status(401).send("error");
  }
});

module.exports = app;
