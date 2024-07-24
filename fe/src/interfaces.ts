export interface Choice {
  id: number;
  name: string;
}

export interface PlayResult {
  player: number;
  computer: number;
  results: string;
}

export interface ResetButtonProps {
  onSetHistory: (history: HistoryRecord[]) => void;
}

export interface HistoryRecord {
  player1: number;
  player2: number;
  result: string;
}

export interface HistoryProps {
  choices: string[];
  history: HistoryRecord[];
  onSetHistory: React.Dispatch<React.SetStateAction<HistoryRecord[]>>;
}

export interface ChoiceListProps {
  choices: string[];
  onSetChoices: React.Dispatch<React.SetStateAction<string[]>>;
  onSetHistory: React.Dispatch<React.SetStateAction<HistoryRecord[]>>;
}
