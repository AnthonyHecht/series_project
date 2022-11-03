const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: { type: String, default: "user" },
  }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);