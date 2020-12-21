import Stopwatch from "./Stopwatch";

const Header = ({ players }) => {
  return (
    <div className="header">
      <ul>
        <li>Players: {players.length}</li>
        <li>
          Total Points:{" "}
          {players.reduce((total, player) => total + player.score, 0)}
        </li>
      </ul>
      <h1>SCOREBOARD</h1>
      <Stopwatch />
    </div>
  );
};

export default Header;
