import { useState, useEffect } from "react";
import * as reviewsAPI from "../../utilities/reviews-api";

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
      <div className="ReviewList">
        <h1>YOUR REVIEWS</h1>
        {reviews.map((review) => (
          <div key={review._id}>
            <p>Rating: {review.rating}</p>
            <p>{review.content}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
