import { useEffect, useState } from 'react';
import './DefaultHeader.css';
import { useNavigate } from 'react-router-dom';

function DefaultHeader() {
  const mainNav = useNavigate();
  function gotoMain() {
    mainNav(`/`);
  }
  function gotoPosting() {
    mainNav(`/posting`);
  }
  return (
    <div className="header">
      <div className="left_side">
        <div
          className="logo"
          onClick={() => {
            gotoMain();
          }}
        >
          Panel
        </div>
      </div>
      <div className="right_side">
        <div
          className="posting-btn"
          onClick={() => {
            gotoPosting();
          }}
        >
          글쓰기
        </div>
        <input className="search_box" type="text" placeholder="찾기" />
      </div>
    </div>
  );
}

export default DefaultHeader;
