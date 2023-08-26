import "./App.css";
import { useState } from "react";
import HomePage from "../HomePage/HomePage";
import ProductPage from "../ProductPage/ProductPage";
import OrderPage from "../OrderPage/OrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import NavBarLoggedOut from "../../components/NavBar/NavBarLoggedOut";
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? 
      <>
      <Routes>
        <Route path="/products" element={<ProductPage user={user} setUser={setUser} />} />
        <Route path="/orders/new" element={<OrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
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
