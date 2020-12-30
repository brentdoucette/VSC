import React, { useState } from "react";

const Header = ({ performSearch, setLoading }) => {
  const [value, setValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
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
