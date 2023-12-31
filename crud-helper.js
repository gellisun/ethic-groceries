// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Product = require('./models/product');
const Category = require('./models/category');
const Order = require('./models/order');
const Review = require('./models/review');
// const Review = require('./models/review');

// // Local variables will come in handy for holding retrieved documents
// let user, item, category, order;
// let users, items, categories, orders;
