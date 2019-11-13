const validator = require("validator");
const mongoose = require("mongoose");

const user = mongoose.model("user", {
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new error("Invalid Email");
      }
    }
  },
  password: {
    type: String,
    require: true,
    minlenght: 5,
    trim: true
  },
  token: {
    type: String,
    default: null
  },
  itemsSelected: {
    name: {
      type: String,
      unique: true,
      default: null
    }
  }
});

module.exports = user;
