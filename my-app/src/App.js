import "./App.css";
import Subject from "./Components/Subject";
import NAV from "./Components/NAV";
import Content from "./Components/Content";
import JSXPractice from "./Components/JSXPractice";

function App() {
  return (
    <div className="App">
      <JSXPractice />
      <hr />
      <h1>안녕하세요</h1>

      {/* 컴포넌트 사용 */}
      <Subject></Subject>

      <hr />
      <NAV></NAV>

      <hr />
      <Content></Content>
    </div>
  );
}

export default App;
