import Product from '../Product/Product';

export default function ProductList({ listedProducts, handleAddToOrder }) {
  const products = listedProducts.map(product =>
    <Product
      key={product._id}
      listedProduct={product}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="ProductList">
      {products}
    </main>
  );
}