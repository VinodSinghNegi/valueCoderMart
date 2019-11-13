const express = require("express");
const userDB = require("../models/signup");
const router = new express.Router();

router.post("/logout", async (req, res) => {
  const value = await userDB.findOneAndUpdate(
    { email: req.body.email },
    { $set: { token: null } }
  );
  try {
    if (value != null) {
      return res.send("You are now logged out");
    } else {
      return res.send("Please Login first");
    }
  } catch {
    return res.send("error logging out");
  }
});
module.exports = router;
