import DashBoard from "./components/Dashboard";
import NavBar from "./components/nav/NavBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <DashBoard />
    </div>
  );
}
