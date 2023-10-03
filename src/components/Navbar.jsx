import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="py-3 px-10 flex items-center sticky top-0 w-full justify-between z-40 bg-[#7DBD5E]">
      <div className="flex items-center">
        <Link to="/">
          <img src="/LogoLoginSV.png" alt="Logo" className="h-8" />
        </Link>
      </div>
      <nav className="text-white relative">
        <div className="inline-block cursor-pointer" onClick={handleMenuClick}>
          {auth?.name}
          {isMenuOpen && (
            <div className="absolute top-10 right-0 bg-white p-2 shadow-md">
              <button onClick={handleSignOut} className="text-black">
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
