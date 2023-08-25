import { RiShoppingCartLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import * as productsAPI from "../../utilities/products-api";
import CategoryList from "../../components/CategoryList/CategoryList";
import ProductList from "../../components/ProductList/ProductList";

export default function ProductPage({ user, setUser }) {
  const [listedProducts, setListedProducts] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const categoriesRef = useRef([]);

  useEffect(function () {
    async function getProducts() {
      const products = await productsAPI.getAll();
      categoriesRef.current = [
        ...new Set(products.map((product) => product.category.name)),
      ];
      setListedProducts(products);
      setActiveCat(categoriesRef.current[0]);
    }
    getProducts();
  }, []);

  return (
    <>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <span className="welcome">Welcome, {user.name}</span>
      <div className="shop-cart-container">
        <div className="shop-div">
          <h1>SHOP</h1>
        </div>
        <RiShoppingCartLine className="cart-icon" size="2rem" color="#50716b" />
      </div>
      <CategoryList
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      <ProductList
        listedProducts={listedProducts.filter(
          (product) => product.category.name === activeCat
        )}
      />
    </>
  );
}
