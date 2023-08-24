import "./App.css";
import { useState } from "react";
import HomePage from "../HomePage/HomePage";
import ProductPage from "../ProductPage/ProductPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? 
      <>
      <Routes>
        <Route path="/" element={<ProductPage user={user} />} />
        <Route path="/orders/new" element={<NewOrderPage />} />
        <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes> 
      <NavBar user={user} setUser={setUser}/>
      </>
      : 
      <HomePage setUser={setUser}/>
      }
    </main>
  );
}
