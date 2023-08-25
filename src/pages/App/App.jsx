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
import { set } from "mongoose";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? 
      <>
      <Routes>
        <Route path="/" element={<ProductPage user={user} setUser={setUser} />} />
        <Route path="/orders/new" element={<OrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes> 
      <NavBar user={user} setUser={setUser}/>
      </>
      : 
      <>
      <HomePage setUser={setUser}/>
      <NavBarLoggedOut user={user} setUser={setUser}/>
      </>
      }
    </main>
  );
}
