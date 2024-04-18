const express = require("express");
const router = express.Router();

const productsControler = require("../controllers/products.controler");

router.get("/products", productsControler.getAllProducts);

module.exports = router;
