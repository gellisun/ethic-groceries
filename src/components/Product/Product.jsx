import { Link } from "react-router-dom";

export default function Product({ listedProduct, handleAddToOrder }) {
  return (
    <>
      <div className="Product">
        <Link to={`/products/${listedProduct._id}`}>
          <img
            className="grocery-item-img"
            src={listedProduct.image}
            alt="grocery item"
          />
          <div className="product-name">{listedProduct.name}</div>
        </Link>
        <div className="product-price">
          <span>${listedProduct.price.toFixed(2)}</span>
          <button
            className="add-product-btn"
            onClick={() => handleAddToOrder(listedProduct._id)}
          >
            ADD
          </button>
        </div>
      </div>
    </>
  );
}
