import './PostItem.css';

export default function PostItem({ post }) {
  console.log(post);
  return (
    <div className="item">
      <div key={`post-list-${post.id}`} style={{ width: '100%' }}>
        <div className="title">{post.title}</div>
        {post.img_name ? (
          <img className="image" src={post.imgUrl} />
        ) : (
          <div></div>
        )}
        <div className="content">{post.created_at}</div>
      </div>
    </div>
  );
}
