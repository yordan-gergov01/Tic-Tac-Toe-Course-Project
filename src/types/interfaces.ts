import { PlayerSymbol } from "./types";

export interface PlayerProps {
  playerName: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, newName: string) => void;
}

export interface GameOverProps {
  winner: PlayerSymbol | string | null;
  onRestart: () => void;
}

export interface GameBoardProps {
  onSelectSquare: (row: number, col: number) => void;
  board: PlayerSymbol[][];
}

export interface Turn {
  square: {
    row: number;
    col: number;
  };
  player: "X" | "O";
}

export interface LogProps {
  turns: Turn[];
}
