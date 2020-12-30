import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GifDetail = (props) => {
  const [gif, setGif] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGif();
    //eslint-disable-next-line
  }, []);

  const fetchGif = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/${props.match.params.id}?api_key=XH4gOuRLQoFzabS39X9HiwjxYOcSSw54`
    );
    setGif(res.data.data);
    setLoading(false);
  };

  const { title, rating, username } = gif;

  return (
    <div className="gif-detail">
      {loading ? (
        <h1>Loading your gif now...</h1>
      ) : (
        <div>
          <h1>{title}</h1>
          <img src={gif.images.downsized.url} alt="" />
          <p>Rating: {rating}</p>
          <p>Author: {username ? username : "Unknown"}</p>
        </div>
      )}
      <Link to="/" id="back">
        Back
      </Link>
    </div>
  );
};

export default GifDetail;
