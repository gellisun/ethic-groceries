import { Link } from "react-router-dom";

export default function NavBarLoggedOut() {
  return (
    <nav className="navbar-container">
      <>
        <Link className="hyperlink" to="/our-products">Our Products</Link>
        &nbsp; | &nbsp;
        <Link className="hyperlink" to="/reviews">Reviews</Link>
        &nbsp; | &nbsp;
        <Link className="hyperlink" to="/contact">Contact Us</Link>
      </>
    </nav>
  );
}