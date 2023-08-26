import LineItem from '../../components/LineItem/LineItem';

export default function OrderPage({cart}) {
    return (
      <div>
        <h1>Your Cart</h1>
        {cart.map((lineItem) => (
          <LineItem key={lineItem.product._id} lineItem={lineItem} />
        ))}
      </div>
    );
  }