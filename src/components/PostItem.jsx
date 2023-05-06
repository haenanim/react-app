import './PostItem.css';

export default function PostItem({ post }) {
  return (
    <div className="item">
      <div key={`post-list-${post.id}`} style={{ width: '100%' }}>
        <div className="title">{post.title}</div>
        <img className="image" src={post.imgUrl} />
        <div className="content">{post.content}</div>
      </div>
    </div>
  );
}
