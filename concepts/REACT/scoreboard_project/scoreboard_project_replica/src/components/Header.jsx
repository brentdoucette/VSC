import React, { useContext } from "react";

import Stopwatch from "./Stopwatch";

import PlayerContext from "../context/playerContext";

const Header = () => {
  const { players } = useContext(PlayerContext);

  return (
    <div className="header">
      <ul>
        <li>Players: {players.length}</li>
        <li>
          Total Points:{" "}
          {players.reduce((total, player) => total + player.score, 0)}
        </li>
      </ul>
      <h1>SCOREBOARD</h1>
      <Stopwatch />
    </div>
  );
};

export default Header;
