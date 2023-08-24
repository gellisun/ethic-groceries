const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populating Menu Item queries)
require('./category');
const productSchema = require('./productSchema');

module.exports = mongoose.model('Product', productSchema);