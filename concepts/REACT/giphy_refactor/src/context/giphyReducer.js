const giphyReducer = (state, action) => {
  switch (action.type) {
    case "PERFORM_SEARCH":
      return {
        ...state,
        gifs: [action.payload],
        loading: false,
      };

    default:
      return state;
  }
};
