import LineItem from "../../components/LineItem/LineItem";
import * as ordersAPI from "../../utilities/orders-api";

export default function OrderPage({ order, setOrder }) {

  async function handleChangeQty(orderId, productId, newQty) {
    try {
      const updatedOrder = await ordersAPI.setProductQtyInCart(
        orderId,
        productId,
        newQty
      );
      setOrder(updatedOrder.lineItems);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleCheckout() {
    console.log('hello')
  }
  console.trace()
  const lineItems = order.lineItems.map((lineItem) => (
    <LineItem
      lineItem={lineItem}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      order={order}
      setOrder={setOrder}
      key={lineItem._id}
    />
  ));
  
  return (
    <div>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <div>
        <h1>NEW ORDER</h1>
      </div>
      <div className="cart-container">
        {lineItems.length ? (
          <>
            {lineItems}
            <section>
              <button onClick={handleCheckout} disabled={!lineItems.length}>
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
