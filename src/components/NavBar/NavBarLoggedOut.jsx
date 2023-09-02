import { Link } from "react-router-dom";

export default function NavBarLoggedOut() {
  return (
    <nav className="navbar-container">
      <>
        <Link className="hyperlink nav-link" to="/about-us">About Us</Link>
        &nbsp; | &nbsp;
        <Link className="hyperlink nav-link" to="/our-reviews">Reviews</Link>
        &nbsp; | &nbsp;
        <Link className="hyperlink nav-link" to="/contact">Contact Us</Link>
      </>
    </nav>
  );
}