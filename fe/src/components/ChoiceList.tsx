import { useEffect, useState } from 'react';
import ChoiceButton from './ChoiceButton';
import {
  Choice,
  ChoiceListProps,
  HistoryRecord,
  PlayResult,
} from '../interfaces';
import api from '../api/axios';
import { MAX_HISTORY_SIZE } from '../constants';

const ChoiceList = ({
  choices,
  onSetChoices,
  onSetHistory,
}: ChoiceListProps) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChoices = async () => {
      try {
        const response = await api.get<Choice[]>(`/choices`);
        const data = response.data.map(choice => choice.name as string);
        onSetChoices(data);
      } catch (error: any) {
        setError('Error fetching choices. Please refresh the page.');
        console.error('Error:', error.message);
      }
    };

    console.log('Choices fetching.');
    fetchChoices();
  }, []);

  const handlePlay = async (choice: number) => {
    console.log('Game play.');
    setButtonsDisabled(true);
    try {
      const response = await api.post<PlayResult>(`/play`, {
        player: choice + 1,
      });
      const { computer, results } = response.data;

      onSetHistory(prevHistory => {
        const newRecord: HistoryRecord = {
          player1: choice,
          player2: computer - 1,
          result: results,
        };
        const newHistory: HistoryRecord[] = [...prevHistory, newRecord];

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

  return (
    <div>
      {error && <p>{error}</p>}
      {choices.length > 0 && (
        <div>
          {choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              index={index}
              buttonsDisabled={buttonsDisabled}
              onPlay={handlePlay}
            >
              <p>{choice}</p>
            </ChoiceButton>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChoiceList;
