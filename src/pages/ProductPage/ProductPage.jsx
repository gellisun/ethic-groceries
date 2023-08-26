import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import * as productsAPI from "../../utilities/products-api";
import * as ordersAPI from "../../utilities/orders-api";
import CategoryList from "../../components/CategoryList/CategoryList";
import ProductList from "../../components/ProductList/ProductList";

export default function ProductPage({ user, setUser }) {
  const [listedProducts, setListedProducts] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [cart, setCart] = useState([]);
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
    async function fetchCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart.lineItems.map((lineItem) => lineItem.product._id));
    }
    fetchCart();
  }, []);

  /*--- Event Handlers --- */
  async function handleAddToOrder(productId) {
    try {
      const newCart = await ordersAPI.addProductToCart(productId);
      setCart(newCart.lineItems);      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <img src="/images/app-name.png" alt="app logo" className="app-logo" />
      <span className="welcome">Welcome, {user.name}</span>
      <div className="shop-cart-container">
        <div className="shop-div">
          <h1>SHOP</h1>
        </div>
        <Link to="/orders/new" />
        {cart.length > 0 ? (
          <RiShoppingCartFill className="cart-icon" size="2rem" color="#50716b" />
          ) : (
            <RiShoppingCartLine className="cart-icon" size="2rem" color="#50716b" />
          )}
        <Link />
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
        handleAddToOrder={handleAddToOrder}
      />
    </>
  );
}
