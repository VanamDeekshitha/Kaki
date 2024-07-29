// src/App.js
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import "./styles.css";
import About from "./comp/About";
import Profile from "./comp/Profile";
import Home from "./comp/Home";
import Bookmark from "./comp/Bookmark";
import GoogleSignInButton from "./components/auth/GoogleSignInButton";
import { AuthProvider, useAuth } from './services/AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return currentUser ? Component : <Navigate to="/login" />;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bookmarks" element={<Bookmark />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
            <Route path="/login" element={<GoogleSignInButton />} />
            <Route path="/signup" element={<GoogleSignInButton />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
