import { useContext } from "react";

import Counter from "./Counter";
import PlayerContext from "../context/playerContext";

const Players = ({ name, id, score, index, isHighScore }) => {
  const { deletePlayer } = useContext(PlayerContext);

  return (
    <div className="players">
      <span onClick={() => deletePlayer(id)}>X</span>
      <h3>
        {isHighScore ? (
          <i className="fas fa-crown" style={myStyle} />
        ) : (
          <i className="fas fa-crown" />
        )}
        {name}
      </h3>
      <Counter score={score} index={index} />
    </div>
  );
};

const myStyle = { color: "#ffc657" };

export default Players;
