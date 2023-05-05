import './Main.css';
import { useEffect, useState } from 'react';
import { fetchPost } from '../core/supabaseUtils';
function Main() {
  return (
    <div className="inner">
      <input type="file" onChange={(e) => {}}></input>
      <button onClick={() => {}}>업로드</button>
      <button onClick={() => {}}>파일 확인</button>
      <button onClick={() => {}}>Url 확인</button>
      <button
        onClick={() => {
          console.log(fetchPost(0, 5));
        }}
      >
        fetch 확인
      </button>
    </div>
  );
}

export default Main;
