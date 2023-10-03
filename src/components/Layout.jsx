import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow overflow-y-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
