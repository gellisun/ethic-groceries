import LineItem from "../../components/LineItem/LineItem";

export default function OrderPage({ order, setOrder, handleCheckout }) {
  if (!order) return null;
  const lineItems = order.lineItems.map((lineItem) => (
    <LineItem lineItem={lineItem} isPaid={order.isPaid} key={lineItem._id} />
  ));

  return (
    <div>
      <div>
        {order.isPaid ? (
          <span>
            Previous Orders <span>{order.orderId}</span>
          </span>
        ) : (
          <span>New Order</span>
        )}
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div>
        {lineItems.length ? (
          <>
            {lineItems}
            <section>
              {order.isPaid ? (
                <span>Total&nbsp;&nbsp;</span>
              ) : (
                <button onClick={handleCheckout} disabled={!lineItems.length}>
                  Checkout
                </button>
              )}
              <span>{order.totalQty}</span>
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
