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
import ErrorMessage from './ErrorMessage';

const ChoiceList = ({
  choices,
  onSetChoices,
  onSetHistory,
}: ChoiceListProps) => {
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorVisible, setErrorVisible] = useState(false);
  const [flippingIndex, setFlippingIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchChoices = async () => {
      try {
        const response = await api.get<Choice[]>(`/choices`);
        const data = response.data.map(choice => choice.name as string);
        onSetChoices(data);
      } catch (error: any) {
        setError('Error fetching choices. Please refresh the page.');
        console.error('Error:', error.message);
        setErrorVisible(true);
        setTimeout(() => setErrorVisible(false), 5000);
      }
    };

    fetchChoices();
  }, [onSetChoices]);

  const handlePlay = async (choice: number) => {
    setButtonsDisabled(true);
    setFlippingIndex(choice); // Set the flipping index to disable other buttons
    try {
      const response = await api.post<PlayResult>(`/play`, {
        player: choice,
      });
      const { player, computer, results } = response.data;
      onSetHistory(prevHistory => {
        const newRecord: HistoryRecord = {
          player1: player,
          player2: computer,
          result: results,
        };
        const newHistory: HistoryRecord[] = [...prevHistory, newRecord];

        if (newHistory.length > MAX_HISTORY_SIZE) {
          newHistory.shift();
        }

        return newHistory;
      });
    } catch (error: any) {
      setError('Some error occurred. Please try again.');
      console.error('Error playing the game:', error.message);
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 5000);
    } finally {
      setButtonsDisabled(false);
      setFlippingIndex(null); // Reset the flipping index
    }
  };

  return (
    <>
      <ErrorMessage visible={errorVisible}>{error}</ErrorMessage>
      {choices.length > 0 && (
        <div className='choices-container'>
          {choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              index={index}
              buttonsDisabled={buttonsDisabled}
              onPlay={handlePlay}
              isFlipping={flippingIndex === index}
            >
              <p>{choice}</p>
            </ChoiceButton>
          ))}
        </div>
      )}
    </>
  );
};

export default ChoiceList;
