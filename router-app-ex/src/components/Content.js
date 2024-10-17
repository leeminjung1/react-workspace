// src/components/Content.js
import React from "react";
import { Link } from "react-router-dom";

const books = [
  { title: "JavaScript Guide", author: "John Doe" },
  { title: "React for Beginners", author: "Jane Smith" },
];

const Content = () => (
  <div>
    <h2>도서 목록</h2>
    <table>
      <thead>
        <tr>
          <th>제목</th>
          <th>작가</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={index}>
            <td>
              <Link to={`/book/${book.title}`}>{book.title}</Link>
            </td>
            <td>{book.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Content;
