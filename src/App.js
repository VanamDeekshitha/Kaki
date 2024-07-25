import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./components/Dashboard";
import NavBar from "./components/nav/NavBar";
import "./styles.css";
import About from "./comp/About";

import Profile from "./comp/Profile";
import Home from "./comp/Home";

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
 
      <Routes>
    
      <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
    </div>
    </BrowserRouter>
  
  );
}
