
export type ManaColor = 'White' | 'Blue' | 'Black' | 'Red' | 'Green';

export interface Deck {
  name: string;
  color: ManaColor;
  set: string;
}

export interface PlayerDecks {
  deckA: string;
  deckB: string;
}

export interface GameRecord {
  id: string;
  player1Decks: PlayerDecks;
  player2Decks: PlayerDecks;
  winner: "player1" | "player2";
  date: string;
}

export interface DeckCombinationStats {
  [key: string]: {
    wins: number;
    losses: number;
  };
}
