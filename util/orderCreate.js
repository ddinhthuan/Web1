const mongoose = require("mongoose");
const Order = require("../models/order");
const urlConnect = "mongodb+srv://20127347:zpTzkE9iG8NV5Td@group4nmcnpm.7otyu.mongodb.net/PrjDB";

//Connect to db
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");

  var order = new Order({});

  order.save(function(err) {
    if (err) throw err;
    console.log("Comment successfully saved.");
  });
});
