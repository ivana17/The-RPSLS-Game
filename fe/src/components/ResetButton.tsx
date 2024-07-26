import { ResetButtonProps } from '../interfaces';
import './ResetButton.css';

const ResetButton = ({ onSetHistory }: ResetButtonProps) => {
  const handleReset = () => {
    console.log('Scoreboard reset.');
    onSetHistory([]);
  };

  return (
    <button className='reset-button' onClick={handleReset}>
      Reset
    </button>
  );
};

export default ResetButton;
