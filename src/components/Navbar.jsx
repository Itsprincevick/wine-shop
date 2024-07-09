import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import Profile from "../assets/user.svg"
import Search from "../assets/search-normal.svg"
import Cart from "../assets/cart.svg"

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav">
        <nav>
          <h1>GloryTaste</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Collection">Collections</Link></li>
            <li><Link to="/Contacts">Contacts</Link></li>
          </ul>
        </nav>
        <ul>
          <li>
              <img src={Profile} className="icon" />
          </li>
          <li>
            <Link to="/Cart">
              <img src={Cart} className="cart-icon" />
            </Link>
          </li>
          <li>
            <img src={Search} className="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
