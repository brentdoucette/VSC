import { useContext, useEffect } from "react";
import GifList from "./GifList";

import GiphyContext from "../context/giphyContext";

const Home = () => {
  const { gifs, loading, performSearch } = useContext(GiphyContext);

  useEffect(() => {
    performSearch();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? <h1 id="loading">Loading...</h1> : <GifList gifs={gifs} />}
    </div>
  );
};

export default Home;
