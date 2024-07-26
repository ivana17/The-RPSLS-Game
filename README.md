# The RPSLS Game

Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands the traditional game of Rock, Paper, Scissors. It was first used to settle a dispute about what to watch on TV between Sheldon and Raj in "The Lizard-Spock Expansion" from "The Big Bang Theory."

## Rules

The game is an expansion of the classic Rock, Paper, Scissors game with two additional hand signs: Lizard (resembling a hand puppet) and Spock (the Vulcan Salute). Each player picks a variable and reveals it simultaneously. The winner is determined based on the following rules:

- Rock crushes Scissors
- Scissors cuts Paper
- Paper covers Rock
- Rock crushes Lizard
- Lizard poisons Spock
- Spock smashes Scissors
- Scissors decapitates Lizard
- Lizard eats Paper
- Paper disproves Spock
- Spock vaporizes Rock

## Project Structure

The project is split into two main parts:

1. Backend (Node.js + Express)
2. Frontend (React)

## Backend Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/the-rpsls-game.git
   cd the-rpsls-game/be
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the server:

   ```
   npm start
   ```

   The server will start on `http://localhost:3000`.

### API Endpoints

- **`GET /api/choices`**: Returns the list of possible choices.
- **`POST /api/choice`**: Submits the player's choice and returns
- **`POST /api/play`**: Submits the player's choice and returns the result of the game.

## Frontend Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Navigate to the fe directory:

   ```
   cd ../fe
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the React app:

   ```
   npm start
   ```

   The React app will start on `http://localhost:5173`.

## Running the Application

1. Make sure the backend server is running.
2. Start the frontend application.
3. Open your browser and navigate to `http://localhost:5173`.

You should now see the game interface, where you can select your choice and play Rock, Paper, Scissors, Lizard, Spock against the computer.
