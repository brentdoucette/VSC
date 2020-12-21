import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Players from "./components/Players";
import AddPlayer from "./components/AddPlayer";

let prevPlayerId = 4;

function App() {
  const [players, setPlayers] = useState([
    {
      name: "Guil",
      score: 0,
      id: 1,
    },
    {
      name: "Treasure",
      score: 0,
      id: 2,
    },
    {
      name: "Ashley",
      score: 0,
      id: 3,
    },
    {
      name: "James",
      score: 0,
      id: 4,
    },
  ]);

  const getHighScore = () => {
    const scores = players.map((player) => player.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } else {
      return null;
    }
  };

  const highScore = getHighScore();

  const addPlayer = (name) => {
    setPlayers([
      ...players,
      {
        name,
        score: 0,
        id: (prevPlayerId = prevPlayerId += 1),
      },
    ]);
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  const handleScoreChange = (index, delta) => {
    players[index].score += delta;
    setPlayers([...players]);
  };

  return (
    <div className="App">
      <Header players={players} />
      {players.map((player, index) => (
        <Players
          key={player.id}
          index={index}
          id={player.id}
          score={player.score}
          name={player.name}
          deletePlayer={deletePlayer}
          changeScore={handleScoreChange}
          isHighScore={highScore === player.score}
        />
      ))}

      <AddPlayer addPlayer={addPlayer} />
    </div>
  );
}

export default App;
