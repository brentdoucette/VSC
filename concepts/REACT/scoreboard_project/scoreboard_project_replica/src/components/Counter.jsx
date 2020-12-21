import { useContext } from "react";
import PlayerContext from "../context/playerContext";

const Counter = ({ score, index }) => {
  const { handleScoreChange } = useContext(PlayerContext);

  return (
    <div className="counter">
      <button
        className="btn btn-decrement"
        onClick={() => handleScoreChange(index, -1)}
      >
        -
      </button>
      <p>{score}</p>
      <button
        className="btn btn-increment"
        onClick={() => handleScoreChange(index, 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
