import { useState, useEffect } from 'react';
import { fetchPost, postCount } from '../core/supabaseUtils';
import PostItem from './PostItem';
import './PostList.css';

export default function PostList() {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const limit = 12;

  async function fetchData() {
    const data = await fetchPost(offset * 12, limit).then((res) => {
      console.log(res, 'pros');
      setList(res);
    });
  }

  function setPostCount() {
    postCount().then((promise) => {
      setCount(promise.length);
    });
  }

  function splitPage() {
    const arr = [];
    for (let i = 0; count / limit > i; ++i) {
      arr.push(
        <div
          className="page-btn"
          onClick={() => {
            setOffset(i);
          }}
        >
          {i + 1}
        </div>
      );
    }
    return arr;
  }

  useEffect(() => {
    fetchData();
    setPostCount();
  }, [offset]);

  return (
    <div className="post-box">
      <div className="postList">
        {list &&
          list.map((post, idx) => {
            return (
              <PostItem id={11111} post={post} key={`post-list-${post.id}`} />
            );
          })}
      </div>
      <div className="pages">{splitPage()}</div>
    </div>
  );
}
