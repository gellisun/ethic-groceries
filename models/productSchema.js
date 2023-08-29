const Schema = require('mongoose').Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  price: { type: Number, required: true },
  description: { type: String, required: true}
}, {
  timestamps: true
});

module.exports = productSchema;