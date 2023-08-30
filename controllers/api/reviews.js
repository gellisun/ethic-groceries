const Order = require("../../models/order");

module.exports = {
  addReview,
}

async function addReview(req, res) {
  try {
    const orderId = req.params.orderId;
    const { content, rating} = req.body;
    console.log(req.body);
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Not Found' });
    }
    order.reviews.create({content: content, rating: rating, user: req.user._id});
    res.json(order);
  } catch (err) {
    res.status(500).json(err);
  }
}