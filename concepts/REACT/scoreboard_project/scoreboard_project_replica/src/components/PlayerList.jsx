import React, { useContext } from "react";
import PlayerContext from "../context/playerContext";
import Players from "./Players";

const PlayerList = () => {
  const { players, highScore } = useContext(PlayerContext);
  return (
    <div>
      {players.map((player, index) => (
        <Players
          index={index}
          key={player.id}
          id={player.id}
          name={player.name}
          score={player.score}
          isHighScore={highScore === player.score}
        />
      ))}
    </div>
  );
};

export default PlayerList;
