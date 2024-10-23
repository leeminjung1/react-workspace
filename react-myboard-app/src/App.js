import React from "react";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostCreate from "./components/PostCreate";
import BoardCreate from "./components/BoardCreate";
import BoardList from "./components/BoardList";
import { Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>익명 질문 게시판</h1>
      <Routes>
        {/* 게시판 목록 */}
        <Route path="/" element={<BoardList />} />
        <Route path="/boards" element={<BoardList />} />
        <Route path="/create-board" element={<BoardCreate />} />

        {/* 게시판 아이디 별 게시글 목록 페이지 */}
        <Route path="/:boardId/posts" element={<PostList />} />

        {/* 전체 게시글 목록 페이지 */}
        <Route path="/posts" element={<PostList />} />
        {/* 게시글 상세 페이지 (게시글 아이디 전달) */}
        <Route path="/post/:id" element={<PostDetail />} />
        {/* 게시글 작성 페이지 */}
        <Route path="/create-post" element={<PostCreate />} />
      </Routes>
    </div>
  );
};

export default App;
