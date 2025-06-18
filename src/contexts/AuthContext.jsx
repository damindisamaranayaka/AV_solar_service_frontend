// src/contexts/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ user: null, token: null });

  const login = (userData, token) => {
    setAuth({ user: userData, token });
  };

  const logout = () => {
    setAuth({ user: null, token: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// // src/contexts/AuthContext.jsx
// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// // Enable cookies in every request
// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://127.0.0.1:8000";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [auth, setAuth] = useState({ user: null, loading: true });

//   // 🟢 Auto fetch user on page load
//   const fetchUser = async () => {
//     try {
//       const response = await axios.get("/api/user");
//       setAuth({ user: response.data, loading: false });
//     } catch (err) {
//       setAuth({ user: null, loading: false });
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       // Step 1: Get CSRF token
//       await axios.get("/sanctum/csrf-cookie");

//       // Step 2: Login
//       await axios.post("/api/login", { email, password });

//       // Step 3: Fetch and store user
//       await fetchUser();
//       return true;
//     } catch (error) {
//       console.error("Login failed", error);
//       return false;
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.post("/api/logout");
//     } catch (e) {
//       console.error("Logout error", e);
//     } finally {
//       setAuth({ user: null, loading: false });
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ ...auth, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
