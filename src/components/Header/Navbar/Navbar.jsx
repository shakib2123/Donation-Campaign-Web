import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center py-5 px-2 max-w-7xl mx-auto">
        <div className="flex justify-center md:justify-start">
          <div className="w-1/2 mb-5 md:w-3/4">
            <img src="https://i.ibb.co/3RV71PQ/Logo.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <ul className="flex space-x-10">
            <li>
              <NavLink className="md:text-2xl font-medium" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="md:text-2xl font-medium" to="/donations">
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink className="md:text-2xl font-medium" to="/statistics">
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
