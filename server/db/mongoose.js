const mongoose = require("mongoose");
const db_url = "mongodb://127.0.0.1:27017/cartDatabase";
mongoose.connect(db_url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
