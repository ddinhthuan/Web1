const Products = require("../models/product");
const Categories = require("../models/productCategory");
const Cart = require("../models/cart");
var Users = require("../models/user");
const Order = require("../models/order");
const passport = require("passport");


exports.admin = (req, res, next) => {
    
    res.render("dashboard");
}