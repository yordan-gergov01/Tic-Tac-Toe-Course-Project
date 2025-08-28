import { useState } from "react";
import { PlayerProps } from "../../types/interfaces";

function Player({ playerName, symbol }: PlayerProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function handleClick() {
    setIsEditing((prev) => !prev);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" required value={playerName} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
