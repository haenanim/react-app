import { useState, useEffect } from 'react';
import { fetchPost, fecthPostImageUrl } from '../core/supabaseUtils';
import PostItem from './PostItem';

export default function PostList() {
  const [list, setList] = useState([
    {
      id: 1,
      title: 'AAAA',
      createdAt: 'YYYY-MM-DD',
    },
    {
      id: 2,
      title: 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB',
      createdAt: 'YYYY-MM-DD',
    },
    {
      id: 3,
      title: 'C',
      createdAt: 'YYYY-MM-DD',
    },
    {
      id: 4,
      title: 'DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD',
      createdAt: 'YYYY-MM-DD',
    },
  ]);

  async function fetchData() {
    const data = await fetchPost(0, 5).then((res) => {
      console.log(res, 'pros');
      setList(res);
    });
  }

  useEffect(() => {
    fetchData();
    console.log('effect');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {list &&
        list.map((post, idx) => {
          return <PostItem post={post} key={`post-list-${post.id}`} />;
        })}
    </div>
  );
}
