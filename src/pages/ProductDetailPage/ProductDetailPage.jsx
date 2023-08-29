import { useState, useEffect } from "react";
import * as productsAPI from "../../utilities/products-api";
import { useParams } from 'react-router-dom';

export default function ProductDetailPage() {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProduct() {
      const product = await productsAPI.getById(id);
      setProduct(product);
    }
    getProduct();
  }, [id]);

  
  if (!product) {
    return <p>Something went wrong!</p>;
  }
  return (
    <>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <h1>PRODUCT INFORMATION</h1>
      <div className="ProductDetails">
        <h3>{product.name}</h3>
        <img
          className="grocery-item-img"
          src={product.image}
          alt="grocery item"
        />&nbsp;<span>${product.price}</span>
        <p>{product.description}</p>
      </div>
    </>
  );
}
