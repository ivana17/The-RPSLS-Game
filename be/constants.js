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
  0: [2, 3], // Rock beats Scissors and Lizard
  1: [0, 4], // Paper beats Rock and Spock
  2: [1, 3], // Scissors beats Paper and Lizard
  3: [1, 4], // Lizard beats Paper and Spock
  4: [0, 2], // Spock beats Rock and Scissors
};

export const choices = [
  { id: 1, name: 'rock' },
  { id: 2, name: 'paper' },
  { id: 3, name: 'scissors' },
  { id: 4, name: 'lizard' },
  { id: 5, name: 'spock' },
];
