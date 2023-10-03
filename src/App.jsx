import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistAuth";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

const ROLES = {
  Admin: "Admin",
  Vendedor: "Vendedor",
  Administracion: "Administracion",
  Cliente: "Cliente",
};

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route element={<PersistLogin />}>
          <Route
            element={
              <RequireAuth
                allowedRoles={[
                  ROLES.Admin,
                  ROLES.Administracion,
                  ROLES.Vendedor,
                  ROLES.Cliente,
                ]}
              />
            }
          >
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
