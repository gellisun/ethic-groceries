const Order = require("../../models/order");

module.exports = {
  createOrder,
  addToOrder,
  setProductQtyInCart,
  checkout,
};

async function createOrder(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function addToOrder(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.addProductToCart(req.params.id);
    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function setProductQtyInCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    await cart.setProductQty(req.body.itemId, req.body.newQty);
    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function checkout(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    cart.isPaid = true;
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
}
