import { Link } from "react-router-dom";

import Gif from "./Gif";

const GifList = ({ gifs }) => {
  if (gifs.length === 0) {
    return <h1 id="error">Sorry.There are no GIFs that match your search.</h1>;
  }

  return (
    <div className="gif-list">
      {gifs.map((gif) => (
        <Link key={gif.id} to={`/gif/${gif.id}`}>
          <Gif id={gif.id} url={gif.images.fixed_height.url} />
        </Link>
      ))}
    </div>
  );
};

export default GifList;
