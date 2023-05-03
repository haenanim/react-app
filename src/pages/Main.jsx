import './Main.css';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Posting from './Posting';
import axios from 'axios';

import Constant from '../core/constant';

const supabaseUrl = Constant.SUPABASE_URL;
const supabaseKey = Constant.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Main() {
  const [showPosting, setShowPosting] = useState(false);
  const [file, setFile] = useState();
  const [fileUrl, setFileUrl] = useState('');

  async function uploadStorage(filename, file) {
    const { data, error } = await supabase.storage
      .from('img')
      .upload(filename, file);
    if (error) {
      console.log('에러' + error);
    } else {
      console.log(data);
      setFileUrl(data.url);
    }
  }
  async function uploadPost(title, content) {
    // const {data, error} = await supabase.from('post').select('*')
    const { data, error } = await supabase
      .from('post')
      .insert([{ title: title, content: content }])
      .select();
    if (error) {
      console.log(error);
    } else {
      // console.log(data)
      return data;
    }
  }

  // async function fetchData() {
  //   const
  //   const limit = 5;
  //   const {data: post, error} = await supabase.from('post').select('*').limit()
  // }

  return (
    <div className="inner">
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      ></input>
      <button
        onClick={() => {
          uploadStorage(file.name, file);
        }}
      >
        업로드
      </button>
      <button
        onClick={() => {
          console.log(file);
        }}
      >
        파일 확인
      </button>
      <button
        onClick={() => {
          console.log(fileUrl);
        }}
      >
        Url 확인
      </button>
      {showPosting ? (
        <Posting
          uploadStorage={uploadStorage}
          uploadPost={uploadPost}
          setShowPosting={setShowPosting}
        />
      ) : (
        <div>asdf</div>
      )}
    </div>
  );
}

export default Main;
