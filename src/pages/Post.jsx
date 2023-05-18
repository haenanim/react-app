import { useParams } from 'react-router';
import { getDatabaseById } from '../core/supabaseUtils';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';
function Post() {
  const [postData, setPostData] = useState({});
  const [contentData, setContentData] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const modifyPostNav = () => {
    navigate(`/posting/${params.num}`, { state: postData });
  };

  function fetchPost() {
    const data = getDatabaseById(params.num);
    return data.then();
  }
  function replaceBrTag(str) {
    if (str == undefined || str == null) {
      return '';
    }
    const text = [];
    str.split('\n').map((line) => {
      text.push(
        <span>
          {line}
          <br />
        </span>
      );
    });
    return text;
  }
  useEffect(() => {
    const data = fetchPost();
    data.then((promise) => {
      setPostData(promise);
    });
  }, []);

  useEffect(() => {
    setContentData(replaceBrTag(postData.content));
  }, [postData]);
  return (
    <div className="post">
      <h1>{postData.title}</h1>
      {postData.img_name && <img src={postData.imgUrl} />}
      <p>{contentData}</p>
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
