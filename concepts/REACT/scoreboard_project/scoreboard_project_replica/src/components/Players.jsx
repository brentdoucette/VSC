import Counter from "./Counter";

const Players = ({
  id,
  index,
  score,
  name,
  deletePlayer,
  changeScore,
  isHighScore,
}) => {
  return (
    <div className="players">
      <span onClick={() => deletePlayer(id)}>X</span>
      <h3>
        {isHighScore ? (
          <i className="fas fa-crown" style={myStyle} />
        ) : (
          <i className="fas fa-crown" />
        )}

        {name}
      </h3>
      <Counter score={score} changeScore={changeScore} index={index} />
    </div>
  );
};

const myStyle = { color: "#ffc657" };

export default Players;
