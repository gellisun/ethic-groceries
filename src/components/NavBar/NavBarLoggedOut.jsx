import { Link } from "react-router-dom";

export default function NavBarLoggedOut() {
  return (
    <nav>
      <>
        <Link className="hyperlink" to="/">Our Products</Link>
        &nbsp; | &nbsp;
        <Link className="hyperlink" to="/about">Meet Us</Link>
        &nbsp; | &nbsp;
        <Link className="hyperlink" to="/contact">Contact Us</Link>
      </>
    </nav>
  );
}