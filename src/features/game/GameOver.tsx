import { GameOverProps } from "../../types/interfaces";

function GameOver({ winner }: GameOverProps) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
      <button>Rematch!</button>
    </div>
  );
}

export default GameOver;
