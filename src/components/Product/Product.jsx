import { Link } from "react-router-dom";
import './Product.css';

export default function Product({ listedProduct, handleAddToOrder }) {
  return (
    <>
      <div className="product-container">
        <Link className="hyperlink" to={`/products/${listedProduct._id}`}>
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
