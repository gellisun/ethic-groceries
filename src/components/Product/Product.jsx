export default function Product({ listedProduct, handleAddToOrder }) {
    return (
      <div className="Product">
        <img className="grocery-item-img" src={listedProduct.image} alt="grocery item" />
        <div className="product-name">{listedProduct.name}</div>
        <div className="product-price">
          <span>${listedProduct.price.toFixed(2)}</span>
          <button className="add-product-btn" onClick={() => handleAddToOrder(listedProduct._id)}>
            ADD
          </button>
        </div>
      </div>
    );
  }