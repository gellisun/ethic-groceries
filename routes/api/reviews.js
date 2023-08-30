const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/reviews/
router.post('/:orderId', ensureLoggedIn, reviewsCtrl.addReview);

module.exports = router;
