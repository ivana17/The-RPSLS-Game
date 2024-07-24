interface ChoiceButtonProps {
  children: React.ReactElement;
  buttonsDisabled: boolean;
  onPlay: (index: number) => void;
  index: number;
}

const ChoiceButton = ({
  children,
  buttonsDisabled,
  onPlay,
  index,
}: ChoiceButtonProps) => {
  return (
    <button
      key={index}
      className='choice-button'
      disabled={buttonsDisabled}
      onClick={() => onPlay(index)}
    >
      {children}
    </button>
  );
};

export default ChoiceButton;
