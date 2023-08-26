require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Food & Beverage', sortOrder: 10},
    {name: 'Pantry', sortOrder: 20},
    {name: 'Household Products', sortOrder: 30},
    {name: 'Personal Care', sortOrder: 40},
    {name: 'Sale', sortOrder: 50},
  ]);

  await Product.deleteMany({});
  const products = await Product.create([
    {name: 'Cherry Tomatoes', image: 'https://picsum.photos/200', category: categories[0], price: 5.95},
    {name: 'Chicken', image: 'https://picsum.photos/200', category: categories[0], price: 6.95},
    {name: 'Courgette', image: 'https://picsum.photos/200', category: categories[0], price: 3.95},
    {name: 'Salad', image: 'https://picsum.photos/200', category: categories[0], price: 4.95},
    {name: 'Crakers', image: 'https://picsum.photos/200', category: categories[0], price: 3.95},
    {name: 'Honey', image: 'https://picsum.photos/200', category: categories[1], price: 5.95},
    {name: 'Chocolate', image: 'https://picsum.photos/200', category: categories[1], price: 7.95},
    {name: 'Biscuits', image: 'https://picsum.photos/200', category: categories[1], price: 4.95},
    {name: 'Olive Oil', image: 'https://picsum.photos/200', category: categories[1], price: 8.95},
    {name: 'Floor Cleaner', image: 'https://picsum.photos/200', category: categories[2], price: 3.95},
    {name: 'Dishwasher Tablets', image: 'https://picsum.photos/200', category: categories[2], price: 8.95},
    {name: 'All Purpose Spray', image: 'https://picsum.photos/200', category: categories[2], price: 3.95},
    {name: 'Sponges', image: 'https://picsum.photos/200', category: categories[2], price: 4.95},
    {name: 'Tootpaste', image: 'https://picsum.photos/200', category: categories[3], price: 5.95},
    {name: 'Shampoo', image: 'https://picsum.photos/200', category: categories[3], price: 8.95},
    {name: 'Deodorant', image: 'https://picsum.photos/200', category: categories[3], price: 6.95},
    {name: 'Hand Cream', image: 'https://picsum.photos/200', category: categories[3], price: 10.95},
    {name: 'Aubergeen', image: 'https://picsum.photos/200', category: categories[4], price: 3.95},
    {name: 'Coffee', image: 'https://picsum.photos/200', category: categories[4], price: 5.95},
    {name: 'Soap', image: 'https://picsum.photos/200', category: categories[4], price: 2.95},
    {name: 'Beer', image: 'https://picsum.photos/200', category: categories[4], price: 13.95},
    {name: 'Wine', image: 'https://picsum.photos/200', category: categories[4], price: 17.95},
  ]);
  process.exit();

})();