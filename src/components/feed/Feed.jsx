import "./feeds.css";
const Feed = ({ content }) => {
  return (
    <div className="feed">
      <div className="post">
        {content?.image && (
          <img
            src={URL.createObjectURL(content.image)}
            alt={content.image.name}
            width={300}
            height={400}
          />
        )}
        {content.text}
      </div>
      <div className="actions">
        <div>
          <i class="bi bi-pencil"></i>
        </div>
        <div>
          <i class="bi bi-star"></i>
        </div>
        <div>
          <i class="bi bi-bookmark"></i>
        </div>
      </div>
    </div>
  );
};

export default Feed;
