import React, { useState, useContext } from "react";
import PlayerContext from "../context/playerContext";

const AddPlayer = () => {
  const { addPlayer } = useContext(PlayerContext);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      alert("Please enter a valid user");
    } else {
      addPlayer(value);
    }

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter a player name"
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="Add Player" />
    </form>
  );
};

export default AddPlayer;
