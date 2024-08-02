import "./App.css";
import "./utility.css";
import Right from "./componentes/Right";

import Left from "./componentes/Left";

function App() {
  return (
    <>
      <div className="container flex justify">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default App;
