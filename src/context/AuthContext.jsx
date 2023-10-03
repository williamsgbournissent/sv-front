import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
    const [persist, setPersist] = useState(
      JSON.parse(localStorage.getItem("persist")) || false
    );

  const contextValue = {
    auth,
    setAuth,
    persist,
    setPersist,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
