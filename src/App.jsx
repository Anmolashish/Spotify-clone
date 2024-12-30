import "./App.css";
import "./utility.css";
import Right from "./componentes/Right";

import Left from "./componentes/Left";
import SongData from "./context/songs/SongData";

function App() {
  return (
    <SongData>
      <div className="container flex justify">
        <Left />
        <Right />
      </div>
    </SongData>
  );
}

export default App;
