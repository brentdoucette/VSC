const Counter = ({ score, index, changeScore }) => {
  return (
    <div className="counter">
      <button
        className="btn btn-decrement"
        onClick={() => changeScore(index, -1)}
      >
        -
      </button>
      <p>{score}</p>
      <button
        className="btn btn-increment"
        onClick={() => changeScore(index, 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
