const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

router.get('/', productsCtrl.index);
router.get('/:id', productsCtrl.show);

module.exports = router;