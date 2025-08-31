export interface PlayerProps {
  playerName: string;
  symbol: string;
  isActive: boolean;
}

export interface GameBoardProps {
  onSelectSquare: () => void;
  activePlayerSymbol: string;
}
