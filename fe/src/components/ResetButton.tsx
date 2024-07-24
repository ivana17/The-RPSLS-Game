import { ResetButtonProps } from '../interfaces';

const ResetButton = ({ onSetHistory }: ResetButtonProps) => {
  const handleReset = () => {
    console.log('Scoreboard reset.');
    onSetHistory([]);
  };

  return <button onClick={handleReset}>Reset</button>;
};

export default ResetButton;
