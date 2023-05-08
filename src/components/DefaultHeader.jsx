import { useEffect, useState } from 'react';

function DefaultHeader() {
  return (
    <div className="inner">
      <div className="header">
        <div className="left_side">
          <a className="logo">Panel</a>
        </div>
        <div className="right_side">
          <button>글쓰기</button>
          <a href="/posting">글쓰기</a>
          <input className="search_box" type="text" placeholder="찾기" />
        </div>
      </div>
    </div>
  );
}

export default DefaultHeader;
