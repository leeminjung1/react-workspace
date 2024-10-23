import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import Post from "./Post";
import { useParams, Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const { boardId } = useParams();

  // 모든 게시글 불러오는 함수
  const loadPosts = async () => {
    try {
      let response;
      if (boardId == null) {
        response = await ApiService.fetchPosts(); //전체 게시글 가져오는 API 호출
      } else {
        response = await ApiService.fetchPostsByBoardId(boardId);
      }
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  // 컴포넌트 마운트될 때 데이터 불러옴
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <h3>게시글 목록</h3>
      <hr />
      {posts.map((post) => (
        <Post post={post} />
      ))}
      <hr />
      <Link to="/create-post">
        <button>게시글 작성</button>
      </Link>
    </div>
  );
};

export default PostList;
