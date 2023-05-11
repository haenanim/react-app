import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Posting from './pages/Posting';
import Post from './pages/Post';
import DefaultLayout from './layout/DefaultLayout';
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/posting/:num?" element={<Posting />}></Route>
            <Route path="/post/:num?" element={<Post />}></Route>
            <Route path="*" element={<div>error</div>}></Route>
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
