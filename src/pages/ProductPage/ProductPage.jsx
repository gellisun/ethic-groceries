import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import * as productsAPI from "../../utilities/products-api";
import * as ordersAPI from "../../utilities/orders-api";
import CategoryList from "../../components/CategoryList/CategoryList";
import ProductList from "../../components/ProductList/ProductList";
import { useNavigate } from "react-router-dom";

export default function ProductPage({ user, setUser, order, setOrder }) {
  const [listedProducts, setListedProducts] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const categoriesRef = useRef([]);
  const navigate = useNavigate();

  useEffect(
    function () {
      async function getProducts() {
        try {
          const products = await productsAPI.getAll();
          categoriesRef.current = [
            ...new Set(products.map((product) => product.category.name)),
          ];
          setListedProducts(products);
          setActiveCat(categoriesRef.current[0]);
        } catch (err) {
          console.error(err);
        }
      }
      getProducts();

    },
    []
  );

  /*--- Event Handlers --- */
  async function handleAddToOrder(productId) {
    try {
      const newOrder = await ordersAPI.addProductToCart(productId);
      setOrder(newOrder);
    } catch (err) {
      console.error(err);
    }
  }

  function handleGoToCart() {
    if(order) {
      navigate('/orders/new')
    } else {
      
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
          {order && order.lineItems.length > 0 ? (
            <RiShoppingCartFill
              className="cart-icon"
              size="2.5rem"
              color="#50716b"
              onClick={handleGoToCart}
            />
          ) : (
            <RiShoppingCartLine
              className="cart-icon"
              size="2.5rem"
              color="#50716b"

            />
          )}
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
