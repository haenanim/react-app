import { useEffect, useState } from 'react';
import './DefaultHeader.css';

function DefaultHeader() {
  return (
    <div className="header">
      <div className="left_side">
        <a className="logo">Panel</a>
      </div>
      <div className="right_side">
        <a className="posting-btn" href="/posting">
          글쓰기
        </a>
        <input className="search_box" type="text" placeholder="찾기" />
      </div>
    </div>
  );
}

export default DefaultHeader;
