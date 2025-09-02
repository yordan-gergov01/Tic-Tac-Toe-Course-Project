import { WINNING_COMBINATIONS } from "../features/game/winning-combinations";
import { PlayerSymbol } from "../types/types";

export function deriveGameWinner(gameBoard: any, players: any) {
  let winner: PlayerSymbol | string = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }

    return winner;
  }
}
