import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import logo from "../../../public/assets/kakilogo.png";
const NavBar = () => {
  return (
    <div className="nav">
      {/* <img src={logo} alt="Logo" className="logo" width={50} /> */}
    
      <FontAwesomeIcon icon={faCrow} className="logo" size="2x" />
  <div>
      <Link  to="/home">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/profile">Profile</Link>
     </div>
 
    </div>
  );
};

export default NavBar;
