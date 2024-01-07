var express = require("express");
var router = express.Router();
const userController = require("../controllers/user");
const productController = require("../controllers/product");
/* GET home page. */

router.get("/", productController.getIndexProducts);

router.get("/product/:productId", productController.getProduct);

router.get(
  "/products/:productType?/:productChild?",
  productController.getProducts
);

router.post("/products/:productType*?", productController.postNumItems);

router.post("/product/:productId", productController.postComment);

router.get("/search", productController.getSearch);

router.get("/shopping_cart", productController.getCart);

router.get("/add-to-cart/:productId", productController.addToCart);

router.get("/modify-cart", productController.modifyCart);

router.get("/add-order", productController.addOrder);

router.post("/add-order", productController.postAddOrder);

router.get("/delete-cart", productController.getDeleteCart);

router.get("/delete-item/:productId", productController.getDeleteItem);

router.get("/merge-cart", productController.mergeCart);

router.get("/add-product", productController.getaddProduct);

router.post("/add-product", productController.postproduct);

router.get("/add-category", productController.getaddCategory);

router.post("/add-category", productController.postaddCategory);

router.get("/dashboard", productController.aboutus);

router.get("/delete-product", productController.getDeleteProduct);

router.post("/delete-product", productController.postDeleteProduct);

router.get("/edit-product", productController.getEditProduct);

router.post("/edit-product", productController.postEditProduct);

router.get("/product-view", productController.getViewProduct);

module.exports = router;
