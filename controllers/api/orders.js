const Order = require("../../models/order");

module.exports = {
  createCart,
  addToCart,
  setProductQtyInCart,
  checkout,
  getOrder,
  getPaidOrders,
};

async function createCart(req, res) {
  try {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function addToCart(req, res) {
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
    await cart.setProductQty(
      req.body.orderId,
      req.body.productId,
      req.body.newQty
    );
    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getOrder(req, res) {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId)
      .populate("user")
      .populate("lineItems.product")
      .exec();
    if (!order) {
      return res.status(404().json({ error: "Order not found" }));
    }
    if (!order.user._id.equals(req.user._id)) {
      return res.status(400).json({ error: "Access denied" });
    }
    res.json(order);
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

async function getPaidOrders(req, res) {
  try {
    const paidOrders = await Order.find({ isPaid: true });
    console.log(paidOrders)
    res.json(paidOrders);
  } catch (err) {
    res.status(500).json(err);
  }
}
