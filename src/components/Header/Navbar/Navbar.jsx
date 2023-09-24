import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-5 px-1 max-w-7xl mx-auto">
        <div className="w-1/4">
          <img src="./Logo.png" alt="" />
        </div>
        <ul className="flex space-x-10">
          <li>
            <NavLink className="text-2xl font-medium" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-2xl font-medium" to="/donation">
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink className="text-2xl font-medium" to="/statistics">
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
