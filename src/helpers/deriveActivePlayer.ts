import { Turn } from "../types/interfaces";

export function deriveActivePlayer(gameTurns: Turn[]): "X" | "O" {
  let currentPlayer: "X" | "O" = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}
