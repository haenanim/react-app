import { fetchPost, fecthPostImageUrl } from '../core/supabaseUtils';

export default function PostItem({ post }) {
  return (
    <div>
      <div
        key={`post-list-${post.id}`}
        style={{
          width: '250px',
        }}
      >
        <div
          style={{
            backgroundColor: 'tomato',
          }}
        >
          {post.id}
        </div>
        <img src={post.imgUrl} />
        <div
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {post.title}
        </div>
      </div>
    </div>
  );
}
