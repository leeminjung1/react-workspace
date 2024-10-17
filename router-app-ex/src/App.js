import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Content from "./components/Content";
import Book from "./components/Book";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/content">도서 목록</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/book/:keyword" element={<Book />} />
      </Routes>
    </div>
  );
};

export default App;
