import { RESULT } from '../constants';
import { HistoryProps, HistoryRecord } from '../interfaces';
import ResetButton from './ResetButton';

const History = ({ choices, history, onSetHistory }: HistoryProps) => {
  return (
    <>
      {history.length > 0 && (
        <>
          <ResetButton onSetHistory={onSetHistory} />
          <div className='history-container'>
            {history.map((record: HistoryRecord, index) => (
              <p
                key={`${record.player1}${record.player2}${record.result}-${index}`}
                className='history-item'
              >
                Player's move: {choices[record.player1]} | Computer's move:{' '}
                {choices[record.player2]} |{' '}
                {record.result === RESULT.WIN
                  ? 'Player won'
                  : record.result === RESULT.LOSE
                    ? 'Computer won'
                    : "It's a tie"}
              </p>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default History;
