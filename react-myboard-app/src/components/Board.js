import React, { useState } from "react";
import ApiService from "../services/ApiService";
import { useNavigate } from "react-router-dom";

const Board = ({ board }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    ApiService.fetchPostsByBoardId(board.board_id);
    navigate(`/${board.board_id}/posts`);
  };

  return (
    <div>
      <div onClick={handleClick}>
        <ul>
          <li key={board.board_id}>
            ID : {board.board_id} <br />
            게시판 이름 : {board.board_name} <br />
            상태 : {board.status}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Board;
