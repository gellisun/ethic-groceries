const Product = require("../../models/product");

module.exports = {
  index,
  show
};

async function index(req, res) {
  try {
    const products = await Product.find({})
      .sort("name")
      .populate("category")
      .exec();
    products.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function show(req, res) {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    console.error(err);
  }
}