import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import PlayerContext from "./playerContext";
import PlayerReducer from "./playerReducer";

const PlayerState = (props) => {
  const initialState = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: uuidv4(),
      },
      {
        name: "Treasure",
        score: 0,
        id: uuidv4(),
      },
      {
        name: "Ashley",
        score: 0,
        id: uuidv4(),
      },
      {
        name: "James",
        score: 0,
        id: uuidv4(),
      },
    ],
  };

  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  //Methods

  //getHighScore

  const getHighScore = () => {
    const scores = state.players.map((player) => player.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } else {
      return null;
    }
  };

  const highScore = getHighScore();

  //addPlayer
  const addPlayer = (name) => {
    dispatch({
      type: "ADD_PLAYER",
      payload: name,
    });
  };

  //deletePlayer
  const deletePlayer = (id) => {
    dispatch({
      type: "DELETE_PLAYER",
      payload: id,
    });
  };

  // //handleScoreChange
  const handleScoreChange = (index, delta) => {
    state.players[index].score += delta;
    dispatch({
      type: "HANDLE_SCORE_CHANGE",
      payload: state.players,
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        players: state.players,
        addPlayer,
        deletePlayer,
        getHighScore,
        handleScoreChange,
        highScore,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
