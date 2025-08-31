import { useState } from "react";

import Player from "./features/players/Player";
import GameBoard from "./features/game/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState<string>("X");

  function handleSelectSquare() {
    // change the current active player
    setActivePlayer((currActivePlayer) =>
      currActivePlayer === "X" ? "O" : "X"
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            playerName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
