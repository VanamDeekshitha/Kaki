import { useEffect, React } from "react";
import Feed from "./Feed";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest } from '../../data/actions/posts.actions';

const Feeds = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);
  console.log("posts", posts);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="feeder">
      {posts?.map((el) => (
        <Feed  key={el.id} content={el} />
      ))}
    </div>
  );
};

export default Feeds;
