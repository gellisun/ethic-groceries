import { useState, useEffect } from "react";
import * as reviewsAPI from "../../utilities/reviews-api";
import "./ReviewList.css";

export default function ReviewList({ user }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const reviews = await reviewsAPI.getUserReviews(user._id);
        setReviews(reviews);
      } catch (err) {
        console.error(err);
      }
    }
    fetchReviews();
  }, [user._id]);

  return (
    <>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <h1>YOUR REVIEWS</h1>
      <div className="ReviewList">
      {reviews.length > 0 ? (
          reviews.map((review) => (
            <div className="review-container" key={review._id}>
              <p>Rating: {review.rating}</p>
              <p>{review.content}</p>
              <hr />
            </div>
          ))
        ) : (
          <div>No reviews yet.</div>
        )}
      </div>
    </>
  );
}
