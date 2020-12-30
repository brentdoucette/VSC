import React, { useState, useContext } from "react";

import GiphyContext from "../context/giphyContext";

const Header = () => {
  const [value, setValue] = useState("");

  const { performSearch, setLoading } = useContext(GiphyContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading();
    performSearch(value);
    e.currentTarget.reset();
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="header">
      <h2 id="title">GIFSEARCH</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Search..." onChange={handleChange} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};

export default Header;
