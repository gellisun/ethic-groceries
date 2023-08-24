import { RiShoppingCartLine } from "react-icons/ri";

export default function ProductPage({ user }) {
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
    </>
  );
}
