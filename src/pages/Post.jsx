import { useParams } from 'react-router';
import { getDatabaseById, deletePost } from '../core/supabaseUtils';
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
  const gotoMain = () => {
    navigate(`/`);
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
    str.split('\n').map((line, idx) => {
      text.push(
        <span key={idx}>
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
      <div className="title">{postData.title}</div>
      {postData.img_name && <img className="image" src={postData.imgUrl} />}
      <div className="content">{contentData}</div>
      <div className="btn-set">
        <button
          className="btn"
          onClick={() => {
            modifyPostNav();
          }}
        >
          수정하기
        </button>
        <button
          className="btn"
          onClick={() => {
            deletePost(params.num);
            gotoMain();
          }}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

export default Post;
