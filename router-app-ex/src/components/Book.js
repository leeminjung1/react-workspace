// src/components/Book.js
import React from "react";
import { useParams } from "react-router-dom";

const bookDetails = {
  Book1: {
    title: "Book1",
    author: "author1",
    publisher: "publisher1",
    publishDate: "2024-01-01",
    price: "₩30,000",
  },
  Book2: {
    title: "Book2",
    author: "author2",
    publisher: "publisher2",
    publishDate: "2024-12-31",
    price: "₩25,000",
  },
};

const Book = () => {
  const { keyword } = useParams();
  const book = bookDetails[keyword];

  return (
    <div>
      {book ? (
        <>
          <h2>{book.title}</h2>
          <p>작가: {book.author}</p>
          <p>출판사: {book.publisher}</p>
          <p>출판일: {book.publishDate}</p>
          <p>가격: {book.price}</p>
        </>
      ) : (
        <p>도서를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Book;
