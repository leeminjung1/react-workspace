import React, { useState } from "react";
import ApiService from "../services/ApiService";
import { useNavigate } from "react-router-dom";

const BoardCreate = () => {
  const [boardName, setBoardName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const boardData = {
      board_name: boardName,
    };

    try {
      const response = await ApiService.createBoard(boardData);
      console.log("Board created successfully: ", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error creating post : ", error);
    }
  };

  return (
    <div>
      <h3>게시판 추가</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>게시판 이름:</label>{" "}
          <input
            type="text"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            required
          />
        </div>
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
};

export default BoardCreate;
