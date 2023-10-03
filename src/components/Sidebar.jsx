import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

function Sidebar() {
  const { auth } = useAuth();

  return (
    <div className="bg-gray-200 w-60 min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Menú</h2>
      </div>
      {auth?.role === "Admin" && (
        <ul>
          <li className="mb-4">
            <Link to="/signup" className="text-blue-500 hover:underline">
              Creación de Usuario
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/dashboard" className="text-blue-500 hover:underline">
              dashboard
            </Link>
          </li>
        </ul>
      )}
      {auth?.role === "Cliente" && (
        <ul>
          <li className="mb-4">
            <Link to="/comprador" className="text-blue-500 hover:underline">
              Dashboard de Comprador
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/comprador/orders"
              className="text-blue-500 hover:underline"
            >
              Mis Pedidos
            </Link>
          </li>
        </ul>
      )}
      {auth?.role === "Administracion" && (
        <ul>
          <li className="mb-4">
            <Link to="/vendedor" className="text-blue-500 hover:underline">
              Dashboard de Administración
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/vendedor/products"
              className="text-blue-500 hover:underline"
            >
              Mis Productos
            </Link>
          </li>
        </ul>
      )}
      {auth?.role === "Vendedor" && (
        <ul>
          <li className="mb-4">
            <Link to="/vendedor" className="text-blue-500 hover:underline">
              Dashboard de Vendedor
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/vendedor/products"
              className="text-blue-500 hover:underline"
            >
              Mis Productos
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
