import { useParams } from 'react-router';
import { getDatabaseById } from '../core/supabaseUtils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';
function Post() {
  const [postData, setPostData] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const modifyPostNav = () => {
    navigate(`/posting/${params.num}`, { state: postData });
  };
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
      <button
        onClick={() => {
          modifyPostNav();
        }}
      >
        수정하기
      </button>
    </div>
  );
}

export default Post;
