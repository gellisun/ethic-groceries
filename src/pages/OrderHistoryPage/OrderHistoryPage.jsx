import * as ordersAPI from "../../utilities/orders-api";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function OrderHistoryPage({ order, setOrder }) {
  useEffect(() => {
    async function fetchPaidOrders() {
      try {
        const paidOrders = await ordersAPI.getPaidOrders();
        setOrder(paidOrders);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPaidOrders();
  }, [setOrder]);

  return (
    <div>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <h1>PREVIOUS ORDERS</h1>
      {order.length > 0 ? (
        <ul>
          {order.map((order) => (
            <li key={order._id}>
              <Link to={`/orders/${order._id}`}>{order.orderId}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No previous orders available.</p>
      )}
    </div>
  );
}
