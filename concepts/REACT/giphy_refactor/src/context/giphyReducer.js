const giphyReducer = (state, action) => {
  switch (action.type) {
    case "PERFORM_SEARCH":
      return {
        ...state,
        gifs: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default giphyReducer;
