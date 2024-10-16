import React from "react";

function JSXPractice() {
  const name = "React Learner";
  const isLoggedIn = false;
  const numbers = [1, 2, 3, 4, 5];

  function handleClick() {
    alert("버튼 클릭");
  }

  return (
    <div>
      <h1>JSX 실습</h1>
      <p>Welcome, {name}</p>

      {isLoggedIn ? <p>로그인되었습니다.</p> : <p>로그인해주세요.</p>}

      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default JSXPractice;
