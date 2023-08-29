import Product from '../Product/Product';
import './ProductList.css';

export default function ProductList({ listedProducts, handleAddToOrder }) {
  const products = listedProducts.map(product =>
    <Product
      key={product._id}
      listedProduct={product}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <div className="ProductList">
      {products}
    </div>
  );
}