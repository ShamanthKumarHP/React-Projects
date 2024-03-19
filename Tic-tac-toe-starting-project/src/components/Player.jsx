import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function triggerEditing() {
    setIsEditing((editing) => !editing);
    if (isEditing){
        onNameChange(symbol,playerName)
    }
  }

  function triggerChange(event) {
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={triggerChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={triggerEditing}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
