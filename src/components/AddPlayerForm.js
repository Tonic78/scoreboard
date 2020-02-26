import React, { useState } from "react";

export default function AddPlayerForm() {
  return (
    <div className="AddPlayerForm">
      <p>
        New player: <input type="text" placeholder="Name" />{" "}
        <button>Add</button>
      </p>
    </div>
  );
}
