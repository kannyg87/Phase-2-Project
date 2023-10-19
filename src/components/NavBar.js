import { NavLink } from "react-router-dom";
import "./NavBar.css";

/* define the NavBar component */
function BasicTabs() {
  return (
    <nav>
      <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink>
      
      <NavLink
        to="/home"
        className="nav-link"
      >
        Home
      </NavLink>
    </nav>
  );
};

export default BasicTabs;
