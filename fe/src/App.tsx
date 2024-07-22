import { useEffect, useState } from 'react';
import api from './api/axios';
import { RESULT, MAX_HISTORY_SIZE } from './constants';
import { PlayResult, Choice } from './interfaces';

const App = () => {
  const [choices, setChoices] = useState<string[]>([]);
  const [history, setHistory] = useState<[number, number, string][]>([]);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePlay = async (choice: number) => {
    console.log('Game play.');
    setButtonsDisabled(true);
    try {
      const response = await api.post<PlayResult>(`/play`, {
        player: choice + 1,
      });
      const { computer, results } = response.data;

      setHistory(prevHistory => {
        const newHistory: [number, number, string][] = [
          ...prevHistory,
          [choice, computer - 1, results],
        ];

        // Ensure only the last MAX_HISTORY_SIZE records are kept
        if (newHistory.length > MAX_HISTORY_SIZE) {
          newHistory.shift(); // Remove the oldest record
        }

        return newHistory;
      });
    } catch (error: any) {
      setError('Some error occurred. Please try again.');
      console.error('Error playing the game:', error.message);
    } finally {
      setButtonsDisabled(false);
    }
  };

  const handleReset = () => {
    console.log('Scoreboard reset.');
    setHistory([]);
  };

  useEffect(() => {
    const fetchChoices = async () => {
      try {
        const response = await api.get<Choice[]>(`/choices`);
        const data = response.data.map(choice => choice.name);
        setChoices(data);
      } catch (error: any) {
        setError('Error fetching choices. Please refresh the page.');
        console.error('Error:', error.message);
      }
    };

    console.log('Choices fetching.');
    fetchChoices();
  }, []);

  return (
    <div>
      <h1>Play your next move</h1>
      {error && (
        <p className={`error-message ${error ? 'fade-out' : ''}`}>{error}</p>
      )}
      {choices.length > 0 &&
        choices.map((choice, index) => (
          <button
            key={index}
            disabled={buttonsDisabled}
            onClick={() => handlePlay(index)}
          >
            {choice}
          </button>
        ))}
      <h1>History</h1>
      {history.length > 0 && (
        <>
          {history.map((move, index) => (
            <p key={`${move[0]}${move[1]}${move[2]}-${index}`}>
              Player's move: {choices[move[0]]} | Computer's move:{' '}
              {choices[move[1]]} |{' '}
              {move[2] === RESULT.WIN
                ? 'Player won'
                : move[2] === RESULT.LOSE
                  ? 'Computer won'
                  : "It's a tie"}
            </p>
          ))}
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default App;
