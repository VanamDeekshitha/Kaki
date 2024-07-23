import Feed from "./Feed";
import { useSelector } from "react-redux";

const Feeds = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log("posts", posts);
  return (
    <div className="feeder">
      {posts?.map((el) => (
        <Feed content={el} />
      ))}
    </div>
  );
};

export default Feeds;
