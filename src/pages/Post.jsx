import { useParams } from 'react-router';
import { getDatabaseById } from '../core/supabaseUtils';
import { useEffect, useState } from 'react';
import './Post.css';
function Post() {
  const [postData, setPostData] = useState({});
  const params = useParams();
  console.log('param' + params);

  function fetchPost() {
    const data = getDatabaseById(params.num);
    return data.then();
  }
  useEffect(() => {
    const data = fetchPost();
    data.then((promise) => {
      setPostData(promise);
    });
  }, []);
  return (
    <div className="post">
      <h1>{postData.title}</h1>
      {postData.img_name && <img src={postData.imgUrl} />}
      <p>{postData.content}</p>
    </div>
  );
}

export default Post;
