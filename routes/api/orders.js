const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/new', ensureLoggedIn, ordersCtrl.createCart);
router.post('/product/:id', ordersCtrl.addToCart);
router.post('/checkout', ensureLoggedIn, ordersCtrl.checkout);
router.put('/qty', ordersCtrl.setProductQtyInCart);
router.get('/:id', ensureLoggedIn, ordersCtrl.getOrder);
router.get('/', ensureLoggedIn, ordersCtrl.getPaidOrders)

module.exports = router;