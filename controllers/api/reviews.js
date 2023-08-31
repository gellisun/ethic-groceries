const Review = require("../../models/review");
const Order = require("../../models/order");


module.exports = {
  addReview,
  getUserReviews,
}

async function addReview(req, res) {
  try {
    const {orderId} = req.params;
    const { content, rating} = req.body;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    const newReview = new Review({content, rating, user: req.user._id, order: order._id});
    await newReview.save();
    res.status(200).json(newReview);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getUserReviews(req, res) {
  try {
    const userId = req.params.userId;
    const reviews = await Review.find({ user: userId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json(err);
  }
}