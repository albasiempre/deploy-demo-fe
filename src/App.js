import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";
import "./index.css";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <AuthContextProvider>
      <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/messenger/:username"
          element={!user ? <Navigate to="/" /> : <Messenger />}
        />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;