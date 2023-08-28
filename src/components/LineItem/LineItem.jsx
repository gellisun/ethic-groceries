export default function LineItem({ lineItem, isPaid, handleChangeQty, order, setOrder }) {
    return (
      <div className="LineItem">
        <div className="product">
          <p>{lineItem.product.name}</p>&nbsp;&nbsp;
          <p>${lineItem.product.price.toFixed(2)}</p>
        </div>&nbsp;&nbsp;&nbsp;
        <div>
          {!isPaid &&
            <button className="qty-btn" onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty - 1)}>−</button>
          }
          <span>{lineItem.qty}</span>
          {!isPaid &&
            <button className="qty-btn" onClick={() => handleChangeQty(lineItem.product._id, lineItem.qty + 1)}>+</button>
          }&nbsp;&nbsp;&nbsp;
          </div>
        <div>${lineItem.extPrice.toFixed(2)}</div>
      </div>
    );
  }