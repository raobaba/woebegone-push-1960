import React, { useState } from "react";
export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const toggleAuth = () => setIsAuth(!isAuth);
  const value = { isAuth, toggleAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthContextProvider;
