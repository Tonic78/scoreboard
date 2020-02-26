import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 }
  ]);

  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"

  const change_sorting = event => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  const players_sorted =
    sort_by === "score"
      ? [...players].sort(compare_score)
      : [...players].sort(compare_name);

  const incrementScore = id => {
    const newPlayerList = players.map(player => {
      if (id === player.id) {
        player.score = player.score + 1;
      }
      return player;
    });
    set_players(newPlayerList);
  };

  const resetButton = () => {
    const newScore = players.map(player => {
      return {
        ...player,
        score: (player.score = 0)
      };
    });
    set_players(newScore);
  };

  return (
    <div className="Scoreboard">
      <p>
        Reset the players score:
        <button onClick={resetButton}>reset</button>
      </p>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <h1>Scoreboard</h1>
      {players_sorted.map(player => {
        return (
          <Player
            id={player.id}
            name={player.name}
            score={player.score}
            incrementscore={incrementScore}
          />
        );
      })}
      <p>
        <AddPlayerForm />
      </p>
    </div>
  );
}
