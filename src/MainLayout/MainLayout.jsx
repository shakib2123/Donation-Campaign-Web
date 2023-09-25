import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
