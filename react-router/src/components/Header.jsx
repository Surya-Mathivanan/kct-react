import { NavLink } from "react-router-dom";
// import logo from "../assets/react.svg";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src="/react.svg" alt="Logo" className="logo" />
        {/* Replace with your logo path */}
        <h1 className="site-name">Air Ticket Booking</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Booking</NavLink>
          </li>

          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
