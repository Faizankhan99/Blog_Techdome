const { model, Schema } = require("mongoose");

const BlogData = new Schema(
  {
    heading: { type: String, require: true },
    subheading: { type: String, require: true },
    content: { type: String, require: true },
    author: { type: "String", required: true },
    imgUrl: { type: "String" },
  },
  { timestamps: true }
);

const Blog = model("blog", BlogData);

module.exports = Blog;
