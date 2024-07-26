import React from 'react';
import './ChoiceButton.css';

interface ChoiceButtonProps {
  children: React.ReactElement;
  buttonsDisabled: boolean;
  onPlay: (index: number) => void;
  index: number;
  isFlipping?: boolean;
  isQuarterFlipping?: boolean; // Add this line
}

const ChoiceButton = ({
  children,
  buttonsDisabled,
  onPlay,
  index,
  isFlipping = false,
  isQuarterFlipping = false, // Default to false
}: ChoiceButtonProps) => {
  return (
    <div
      className={`choice-button-wrapper ${
        isFlipping ? 'flipping' : isQuarterFlipping ? 'quarter-flip' : ''
      }`}
    >
      <button
        className={`choice-button ${isFlipping || isQuarterFlipping ? 'flipped' : ''}`}
        disabled={buttonsDisabled}
        onClick={() => onPlay(index)}
      >
        {children}
      </button>
    </div>
  );
};

export default ChoiceButton;
