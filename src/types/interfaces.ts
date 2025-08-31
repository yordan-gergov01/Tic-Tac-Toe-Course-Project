export interface PlayerProps {
  playerName: string;
  symbol: string;
  isActive: boolean;
}

export interface GameBoardProps {
  onSelectSquare: (row: number, col: number) => void;
  turns: Turn[];
}

export interface Turn {
  square: {
    row: number;
    col: number;
  };
  player: "X" | "O";
}
