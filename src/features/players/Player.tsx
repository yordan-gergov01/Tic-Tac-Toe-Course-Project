import { useState } from "react";
import { PlayerProps } from "../../types/interfaces";

function Player({ playerName, symbol }: PlayerProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newName, setNewName] = useState(playerName);

  function handleClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event: any) {
    event.preventDefault();

    setNewName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{newName}</span>
        ) : (
          <input type="text" required value={newName} onChange={handleChange} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
