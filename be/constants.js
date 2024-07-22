export const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

export const RESULT = {
  TIE: 'TIE',
  WIN: 'WIN',
  LOSE: 'LOSE',
};

export const rules = {
  1: [3, 4], // Rock beats Scissors and Lizard
  2: [1, 5], // Paper beats Rock and Spock
  3: [2, 4], // Scissors beats Paper and Lizard
  4: [2, 5], // Lizard beats Paper and Spock
  5: [1, 3], // Spock beats Rock and Scissors
};

export const choices = [
  { id: 1, name: 'rock' },
  { id: 2, name: 'paper' },
  { id: 3, name: 'scissors' },
  { id: 4, name: 'lizard' },
  { id: 5, name: 'spock' },
];
