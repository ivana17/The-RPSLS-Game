import { useEffect, useRef } from 'react';
import { RESULT } from '../constants';
import { HistoryProps, HistoryRecord } from '../interfaces';

const History = ({ choices, history }: HistoryProps) => {
  const historyEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyEndRef.current) {
      historyEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  return (
    <div className='history-list'>
      {history.length > 0 && (
        <>
          {history.map((record: HistoryRecord, index) => (
            <div
              key={`${record.player1}${record.player2}${record.result}-${index}`}
              className='history-item'
            >
              <div
                className={`history-choice ${record.result === RESULT.WIN && 'winner'}`}
              >
                {choices[record.player1]}
              </div>
              <div
                className={`history-choice ${record.result === RESULT.LOSE && 'winner'}`}
              >
                {choices[record.player2]}
              </div>
            </div>
          ))}
          <div ref={historyEndRef} />
        </>
      )}
    </div>
  );
};

export default History;
