import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "../HomePage/HomePage";
import ProductPage from "../ProductPage/ProductPage";
import OrderPage from "../OrderPage/OrderPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import NavBarLoggedOut from "../../components/NavBar/NavBarLoggedOut";
import { getUser } from '../../utilities/users-service';
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import ProductDetailPage from '../../pages/ProductDetailPage/ProductDetailPage';
import * as ordersAPI from '../../utilities/orders-api';
import ReviewList from '../../components/ReviewList/ReviewList';
import Payment from '../../components/Payment/Payment';
import Completion from '../../components/Completion/Completion';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchCart() {
      try {
        const order = await ordersAPI.getCart();
        setOrder(order);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCart();
  }, [])
  

  return (
    <main className="App">
      {user ? 
      <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage user={user} setUser={setUser} order={order} setOrder={setOrder}  />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/orders/new" element={<OrderPage order={order} setOrder={setOrder} />} />
        <Route path="/orders" element={<OrderHistoryPage order={order} setOrder={setOrder} />} />
        <Route path="/reviews" element={<ReviewList user={user} />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/completion" element={<Completion />} />
      </Routes> 
      <NavBar user={user} setUser={setUser}/>
      </>
      : 
      <>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
      </Routes>
      <NavBarLoggedOut user={user} setUser={setUser}/>
      </>
      }
    </main>
  );
}
