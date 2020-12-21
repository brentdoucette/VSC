import { v4 as uuidv4 } from "uuid";

const PlayerReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_SCORE_CHANGE":
      return {
        ...state,
        players: [...state.players],
      };

    case "ADD_PLAYER":
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.payload,
            score: 0,
            id: uuidv4(),
          },
        ],
      };
    case "DELETE_PLAYER":
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload),
      };

    default:
      return state;
  }
};

export default PlayerReducer;
