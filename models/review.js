const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: { type: String, required: true },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Review", reviewSchema);