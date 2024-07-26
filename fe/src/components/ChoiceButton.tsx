import './ChoiceButton.css';

interface ChoiceButtonProps {
  children: React.ReactElement;
  buttonsDisabled: boolean;
  onPlay: (index: number) => void;
  index: number;
  isFlipping: boolean;
}

const ChoiceButton = ({
  children,
  buttonsDisabled,
  onPlay,
  index,
  isFlipping,
}: ChoiceButtonProps) => {
  return (
    <div className={`choice-button-wrapper ${isFlipping ? 'flipping' : ''}`}>
      <button
        key={index}
        className='choice-button'
        disabled={buttonsDisabled}
        onClick={() => onPlay(index)}
      >
        {children}
      </button>
    </div>
  );
};

export default ChoiceButton;
