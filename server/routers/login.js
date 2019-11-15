const express = require("express");
const userDB = require("../models/signup");
const router = new express.Router();
const jwt = require("jwt-simple");

var token = null;

router.post("/login", async (req, res) => {
  const userEmail = req.body.email;
  const userPass = req.body.password;
  const allValue = await userDB.find({});
  try {
    await allValue.forEach(index => {
      if (index.token != null) {
        return res.send("User Already Logged In");
      }
    });
    const foundValue = await userDB.findOne({ email: userEmail });
    if (foundValue.password == userPass) {
      const secretKey = "correct";
      let date = new Date();
      let time = date.getTime();
      token = jwt.encode({ email: userEmail, time }, secretKey);
      await userDB.updateOne({ email: userEmail }, { token: token });
      res.send("success");
    } else {
      res.send("Wrong Email or Password");
    }
  } catch {
    return res.send("Wrong Email or Password");
  }
});

module.exports = router;
