import React from 'react';
import './PostItem.css';

export default function PostItem({ post }) {
  console.log(post);

  function unpackDate(created_At) {
    const createdAt = new Date(created_At);
    const year = createdAt.getFullYear();
    const month = createdAt.getMonth();
    const date = createdAt.getDate();
    const hours = createdAt.getHours();
    const minutes = createdAt.getMinutes();
    const seconds = createdAt.getSeconds();

    const fromattedDate = `${year}년 ${month}월 ${date}일 ${hours}:${minutes}`;
    return fromattedDate;
  }

  return (
    <div className="item" key={`post-list-${post.id}`}>
      <div className="title">{post.title}</div>
      {post.img_name ? (
        <img className="image" src={post.imgUrl} />
      ) : (
        <div className="content">{post.content}</div>
      )}
      <div className="created-at">{unpackDate(post.created_at)}</div>
    </div>
  );
}
