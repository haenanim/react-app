import { useEffect, useState } from 'react';
import './DefaultHeader.css';
import { useNavigate } from 'react-router-dom';

function DefaultHeader() {
  const mainNav = useNavigate();
  function gotoMain() {
    mainNav(`/`);
  }
  return (
    <div className="header">
      <div className="left_side">
        <a
          className="logo"
          onClick={() => {
            gotoMain();
          }}
        >
          Panel
        </a>
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
