import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {
  uploadPost,
  uploadStorage,
  updatePostImgName,
  updatePost,
} from '../core/supabaseUtils';
import { useNavigate, useLocation } from 'react-router-dom';

import './Posting.css';

export default function Posting() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const mainPageNav = () => {
    navigate(`/`);
  };
  // const { state } = useLocation();

  const location = useLocation();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    console.log(location);
    if (params.num) {
      setTitle(location.state.title);
      setContent(location.state.content);
    }
  }, []);
  // function fetchPost() {
  //   const data = getDatabaseById(params.num);
  //   return data;
  // }

  function handleImageChange(e) {
    const fileArray = Array.from(e.target.files);
    setImages(fileArray);
  }

  function submitPost() {
    const data = uploadPost(title, content);
    data.then((promise) => {
      uploadImage(promise);
    });
  }

  function uploadImage(promise) {
    if (images) {
      images.map((image, index) => {
        const imageName = promise[0].id + '-' + index;
        const data = uploadStorage(imageName, image);
        updatePostImgName(promise[0].id, imageName);
      });
    }
  }

  function modifyPost() {
    updatePost(params.num, title, content);
  }

  return (
    <div className="view">
      <div className="posting">
        <h1>글 쓰기</h1>

        <div className="title_box">
          <div htmlFor="post_title" className="title">
            제목
          </div>
          <input
            type="text"
            className="post_title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>
        <div className="picture_box">
          <div>사진</div>
          <div>
            <input type="file" onChange={handleImageChange} />
            <div>
              {images.map((image) => (
                <img
                  key={image.name}
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div>내용</div>
        <textarea
          className="post_content"
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
        />
        <button
          className="complete_btn"
          onClick={() => {
            if (params.num) {
              modifyPost();
            } else {
              submitPost();
            }
            mainPageNav();
          }}
        >
          작성
        </button>
      </div>
    </div>
  );
}
