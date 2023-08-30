import * as ordersAPI from "../../utilities/orders-api";
import { useEffect, useState } from "react";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

export default function OrderHistoryPage({ user, order, setOrder }) {
  const [showReviewForm, setShowReviewForm] = useState({});
  const [reviewSubmitted, setReviewSubmitted] = useState({});

  useEffect(() => {
    async function fetchPaidOrders() {
      try {
        const paidOrders = await ordersAPI.getPaidOrders();
        const userPaidOrders = paidOrders.filter(order => order.user === user._id);
        setOrder(userPaidOrders);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPaidOrders();
  }, [user, setOrder]);

  function handleReviewAdded(orderId) {
    setShowReviewForm({ ...showReviewForm, [orderId]: false });
    setReviewSubmitted({ ...reviewSubmitted, [orderId]: true });
  }

  return (
    <>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <h1>PREVIOUS ORDERS</h1>
      {order.length > 0 ? (
        <ul className="order-history-list">
          {order.map((order) => (
            <div className="order-refs" key={order._id}>
              <li className="order-history-li">
                Order reference: {order.orderId}
              </li>
              <span>
                Made on {new Date(order.updatedAt).toLocaleDateString()}
              </span>
              &nbsp;&nbsp;
              {showReviewForm[order._id] && !reviewSubmitted[order._id] ? (
                <ReviewForm
                  orderId={order._id}
                  onReviewAdded={() => handleReviewAdded(order._id)}
                />
              ) : (
                <button
                  onClick={() =>
                    setShowReviewForm({ ...showReviewForm, [order._id]: true })
                  }
                  disabled={reviewSubmitted[order._id]} 
                >
                </button>
              )}
            </div>
          ))}
        </ul>
      ) : (
        <p>No previous orders available.</p>
      )}
    </>
  );
}
