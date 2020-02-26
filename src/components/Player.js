import React from "react";

export default function Player(props) {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    console.log(props.id);
    props.incrementscore(props.id);
  };

  return (
    <li className="Player">
      <p>
        {props.name} (score: {props.score})
        <button onClick={onClickIncrement}>increment</button>
      </p>
    </li>
  );
}
