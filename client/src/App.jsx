import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import Home from "./pages/home/Home";
// eslint-disable-next-line no-unused-vars
import Login from "./pages/login/Login";
// eslint-disable-next-line no-unused-vars
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {AuthUser}= useAuthContext()
  return (
    <div className="h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={AuthUser ? <Home />  : <Navigate to="/login" /> } />
        <Route path="/login" element={AuthUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={AuthUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
