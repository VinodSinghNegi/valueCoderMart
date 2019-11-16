const express = require("express");
const userDB = require("../models/signup");
const itemDB = require("../models/items");
const router = new express.Router();

router.post('/items/show', async (req, res) => {
  const email = req.body.email
  try {
    const userData = await userDB.findOne({ email })
    const userProducts = userData.itemsSelected
    res.send(userProducts)
  } catch (e) {
    res.send("error" + e)
  }

})

router.post("/items", async (req, res) => {
  const putItem = req.body.itemName;
  const putProduct = req.body.productName;
  const email = req.body.email;
  try {

    const userData = await userDB.findOne({ email });
    const userProducts = userData.itemsSelected;
    await userDB.updateOne({ email }, { itemsSelected: { ...userProducts, [putProduct]: putItem } });
    res.send("success");
  } catch (e) {
    res.send("error");
  }
});

module.exports = router;
