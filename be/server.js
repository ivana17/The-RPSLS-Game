import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
import Joi from 'joi';
import http from 'http';
import { Server } from 'socket.io';
import { choices, RESULT, corsOptions, rules } from './constants.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;
const EXTERNAL_API = process.env.EXTERNAL_API;

app.use(cors(corsOptions));
app.use(express.json());

const playerSchema = Joi.object({
  player: Joi.number().integer().min(1).max(5).required(),
});

const getRandomIndex = async () => {
  const response = await axios.get(`${EXTERNAL_API}/random`);
  const { random_number: randomIndex } = response.data;
  return randomIndex % 5;
};

const play = (player, player2) => {
  if (player === player2) {
    return RESULT.TIE;
  }
  if (rules[player].includes(player2)) {
    return RESULT.WIN;
  }
  return RESULT.LOSE;
};

// Socket
let arr = [];
let playingArray = [];

io.on('connection', socket => {
  console.log('user connected');
  // Listen for a 'play' event
  socket.on('play', data => {
    console.log('Play event data:', data);
    // Broadcast the play result to all connected clients
    io.emit('playResult', data);
  });
  socket.on('disconnect', e => {
    console.log('user disconnected');
  });
});

// API

app.get('/', (_, res) => {
  res.redirect('/choices');
});

app.get('/choices', (_, res) => {
  res.json(choices);
});

app.get('/choice', async (_, res) => {
  try {
    const randomIndex = await getRandomIndex();
    console.log(randomIndex);
    res.json(choices[randomIndex % 5]);
  } catch (error) {
    console.error('Error fetching random choice:', error.message);
    res.status(500).json({ error: 'Failed to fetch random choice' });
  }
});

app.post('/play', async (req, res) => {
  const { error, value } = playerSchema.validate(req.body);
  if (error) {
    console.error('Error in body request:', error.message);
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const playerChoice = value.player;
    const computerChoice = await getRandomIndex();

    const gameResult = play(playerChoice, computerChoice);

    res.json({
      results: gameResult,
      player: playerChoice,
      computer: computerChoice,
    });
  } catch (error) {
    console.error('Error fetching random choice:', error.message);
    res.status(500).json({ error: 'Failed to fetch random choice' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
