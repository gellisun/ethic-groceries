const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

router.get('/new', ordersCtrl.createOrder);
router.post('/product/:id', ordersCtrl.addToOrder);
router.post('/checkout', ordersCtrl.checkout);
router.put('/qty', ordersCtrl.setProductQtyInCart);

module.exports = router;