import Player from "./features/players/Player";
import GameBoard from "./features/game/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="Player 1" symbol="X" />
          <Player playerName="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
