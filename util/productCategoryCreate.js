const mongoose = require("mongoose");
const ProductCategory = require("../models/productCategory");
const urlConnect = "mongodb+srv://20127347:zpTzkE9iG8NV5Td@group4nmcnpm.7otyu.mongodb.net/PrjDB";


// Connect to database
mongoose.connect(urlConnect, { useNewUrlParser: true }, err => {
  if (err) throw err;
  console.log("Connect successfully!!");

  var abc = new ProductCategory({
    name: "Quần",
    childName: ["Quần Dài", "Quần Ngắn", "Quần Thể Thao", "Quần Xì"]
  });

  abc.save(function(err) {
    if (err) throw err;
    console.log("Category successfully saved.");
  });
});
