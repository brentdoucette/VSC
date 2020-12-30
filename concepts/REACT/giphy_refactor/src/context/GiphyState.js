import { useReducer } from "react";
import GiphyContext from "./giphyContext";
import GiphyReducer from "./giphyReducer";
import axios from "axios";

const GiphyState = (props) => {
  const initialState = {
    gifs: [],
    loading: true,
    value: "",
  };

  const [state, dispatch] = useReducer(GiphyReducer, initialState);

  //METHODS
  //perform search
  const performSearch = async (query = "cats") => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=XH4gOuRLQoFzabS39X9HiwjxYOcSSw54&q=${query}&limit=24&offset=0&rating=r&lang=en`
    );
    dispatch({
      type: "PERFORM_SEARCH",
      payload: res.data.data,
    });
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <GiphyContext.Provider
      value={{
        gifs: state.gifs,
        loading: state.loading,
        performSearch,
        setLoading,
      }}
    >
      {props.children}
    </GiphyContext.Provider>
  );
};

export default GiphyState;
