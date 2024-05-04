const express = require("express");

const cartController = require("../controllers/cart.controller");
const { route } = require("./auth.routes");

const router = express.Router();

router.get("/", cartController.getCart);

router.post("/items", cartController.addCartItem); // /cart/items

router.patch("/items", cartController.updateCart);

module.exports = router;
