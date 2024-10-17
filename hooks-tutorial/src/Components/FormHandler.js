import React, { useReducer, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
};

// 리듀서 함수
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_INPUT":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const FormHandler = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // 입력값이 변경될 때마다 콘솔에 입력값을 출력하는 useEffect
  useEffect(() => {
    console.log(state);
  }, [state]);

  // 마운트될 때 한 번 서버 데이터 로딩을 시뮬레이션하는 useEffect
  useEffect(() => {
    setTimeout(() => {
      console.log("데이터 로딩 완료");
    }, 2000);
  }, []);

  // 입력 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_INPUT", field: name, value });
  };

  // 초기화 핸들러
  const handleReset = () => {
    dispatch({ type: "RESET" });
    alert("초기화되었습니다");
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        value={state.name}
        onChange={handleInputChange}
      />
      <input
        name="email"
        placeholder="이메일"
        value={state.email}
        onChange={handleInputChange}
      />
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

export default FormHandler;
