import "./App.css";

import Header from "./components/Header";
import AddPlayer from "./components/AddPlayer";
import PlayerList from "./components/PlayerList";

import PlayerState from "./context/PlayerState";

function App() {
  return (
    <PlayerState>
      <div className="App">
        <Header />
        <PlayerList />
        <AddPlayer />
      </div>
    </PlayerState>
  );
}

export default App;
