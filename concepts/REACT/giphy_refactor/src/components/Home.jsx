import GifList from "./GifList";

const Home = ({ gifs, loading }) => {
  return (
    <div>
      {loading ? <h1 id="loading">Loading...</h1> : <GifList gifs={gifs} />}
    </div>
  );
};

export default Home;
