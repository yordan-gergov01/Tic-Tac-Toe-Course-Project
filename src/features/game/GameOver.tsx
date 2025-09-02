import { GameOverProps } from "../../types/interfaces";

function GameOver({ winner, onRestart }: GameOverProps) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
      <button onClick={onRestart}>Rematch!</button>
    </div>
  );
}

export default GameOver;
