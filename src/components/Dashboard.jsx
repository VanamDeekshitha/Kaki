import CreatePost from "./create/CreatePost";
import "./dashboard.css";
import Feeds from "./feed/Feeds";
const DashBoard = () => {
  return (
    <div className="dashboard">
      <CreatePost />
      <Feeds />
    </div>
  );
};

export default DashBoard;
