const express = require("express");
const userDB = require("../models/signup");
const itemDB = require("../models/items");
const router = new express.Router();

// router.get('/items',(req,res)=>{

// })

router.post("/items", async (req, res) => {
  const item = req.body.item;
  const email = req.body.email;
  try {
    console.log(item);
    await userDB.findOneAndUpdate({ email }, { itemsSelected: item });

    res.send("Items saved successfully");
  } catch (e) {
    res.send("Error saving items");
  }
});

module.exports = router;
