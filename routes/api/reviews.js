const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// /api/reviews/
router.post('/:orderId', ensureLoggedIn, reviewsCtrl.addReview);
router.get('/:userId', ensureLoggedIn, reviewsCtrl.getUserReviews);

module.exports = router;
