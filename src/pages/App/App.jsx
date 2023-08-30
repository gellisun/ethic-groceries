import "./App.css";
import { useState } from "react";
import HomePage from "../HomePage/HomePage";
import ProductPage from "../ProductPage/ProductPage";
import OrderPage from "../OrderPage/OrderPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import NavBarLoggedOut from "../../components/NavBar/NavBarLoggedOut";
import { getUser } from '../../utilities/users-service';
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import ProductDetailPage from '../../pages/ProductDetailPage/ProductDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [order, setOrder] = useState([]);

  return (
    <main className="App">
      {user ? 
      <>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage user={user} setUser={setUser} order={order} setOrder={setOrder}  />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/orders/new" element={<OrderPage order={order} setOrder={setOrder} />} />
        <Route path="/orders" element={<OrderHistoryPage user={user} order={order} setOrder={setOrder} />} />
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
