import { useState } from 'react';
import * as reviewsAPI from '../../utilities/reviews-api';
import './ReviewForm.css';

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
      <form className='review-form' onSubmit={handleReviewSubmit}>
        <div>
          <label className='review-label'>Review:</label>
          <textarea
            className='review-input'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='review-label'>Rating:</label>
          <input
            className='review-input'
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
