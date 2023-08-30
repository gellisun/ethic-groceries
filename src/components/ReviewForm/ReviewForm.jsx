import { useState } from 'react';
import * as reviewsAPI from '../../utilities/reviews-api';

export default function ReviewForm({ orderId, onReviewAdded }) {
 const [content, setContent] = useState('');
 const [rating, setRating] = useState(5);
 
 async function handleReviewSubmit(evt) {
  evt.preventDefault();
  try {
    await reviewsAPI.addReview(orderId, { content, rating});
    onReviewAdded();
  } catch (err) {
    console.error(err);
  }
 }

  return (
    <div>
      <form onSubmit={handleReviewSubmit}>
        <div>
          <label>Review:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
