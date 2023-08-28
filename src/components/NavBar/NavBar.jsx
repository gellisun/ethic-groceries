import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav className="navbar-container">
      <>
        <Link className="hyperlink" to="/products">
          Shop
        </Link>
        &nbsp; | &nbsp;
        <Link className="hyperlink" to="/orders/new">
          New Order
        </Link>
        &nbsp; | &nbsp;
        <Link className="hyperlink" to="/orders">
          Order History
        </Link>
        &nbsp; | &nbsp;
        <Link className="hyperlink" to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </>
    </nav>
  );
}
