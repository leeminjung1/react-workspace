import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import { Link } from "react-router-dom";
import Board from "./Board";

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  const loadBoards = async () => {
    try {
      const response = await ApiService.fetchBoards();
      console.log(response.data);
      setBoards(response.data);
    } catch (error) {
      console.error("Error fetching boards: ", error);
    }
  };

  //컴포넌트가 마운트될 때 데이터를 불러오기
  useEffect(() => {
    loadBoards();
  }, []);

  return (
    <div>
      <h3>게시판 목록</h3>

      {boards.map((board) => (
        <Board board={board} />
      ))}
      <hr />
      <Link to="/create-board">
        <button>게시판 만들기</button>
      </Link>
    </div>
  );
};

export default BoardList;
