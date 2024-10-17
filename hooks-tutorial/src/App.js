import React from "react";
import Counter from "./Components/Counter";
import Info from "./Components/Info";
import Average from "./Components/Average";
import FormHandler from "./Components/FormHandler";

const App = () => {
  return (
    <div>
      <FormHandler />
      <hr />
      <Average />
      <hr />
      <Counter />
      <hr />
      <Info />
    </div>
  );
};

export default App;
