import { useState, useEffect } from 'react';
import { fetchPost } from '../core/supabaseUtils';
import PostItem from './PostItem';
import './PostList.css';

export default function PostList() {
  const [list, setList] = useState([]);
  const limit = 12;
  const offset = 0;

  async function fetchData() {
    const data = await fetchPost(offset, limit).then((res) => {
      console.log(res, 'pros');
      setList(res);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="postList">
      {list &&
        list.map((post, idx) => {
          return (
            <PostItem id={11111} post={post} key={`post-list-${post.id}`} />
          );
        })}
    </div>
  );
}
