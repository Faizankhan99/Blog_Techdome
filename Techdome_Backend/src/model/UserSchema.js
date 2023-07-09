const { model, Schema } = require("mongoose");

const UserData = new Schema({
  name: { type: "String", require: true },
  email: { type: "string", required: true },
  password: { type: "String", required: true },
});

const user = model("user", UserData);

module.exports = user;
