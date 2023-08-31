import LineItem from "../../components/LineItem/LineItem";
import * as ordersAPI from "../../utilities/orders-api";
import { useNavigate } from "react-router-dom";

export default function OrderPage({ order, setOrder }) {
  const navigate = useNavigate();

  async function handleChangeQty(orderId, productId, newQty) {
    try {
      const updatedOrder = await ordersAPI.setProductQtyInCart(
        orderId,
        productId,
        newQty
      );
      setOrder(updatedOrder);
    } catch (err) {
      console.error(err);
    }
  }
  async function handleCheckout() {
    try {
      const checkedOutOrder = await ordersAPI.checkout();
      setOrder(checkedOutOrder);
      navigate('/payment');
    } catch (err) {
      console.error(err);
    }
  }
  const lineItems = order.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      order={order}
      setOrder={setOrder}
      key={item._id}
    />
  ));
  
  return (
    <div>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <div>
        <h1 className="new-order-h1">NEW ORDER</h1>
      </div>
      <div className="cart-container">
        {lineItems.length ? (
          <>
            {lineItems}
            <section>
              <button className="checkout-btn" onClick={handleCheckout} disabled={!lineItems.length}>
                Checkout
              </button>
              &nbsp;
              <span>{order.totalQty}</span>&nbsp;
              <span>${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div>Nothing in your cart</div>
        )}
      </div>
    </div>
  );
}
