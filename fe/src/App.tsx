import { useState } from 'react';
import './App.css';
import ChoiceList from './components/ChoiceList';
import History from './components/History';
import { HistoryRecord } from './interfaces';

const App = () => {
  const [choices, setChoices] = useState<string[]>([]);
  const [history, setHistory] = useState<HistoryRecord[]>([]);

  return (
    <div className='app-container'>
      <div className='choices-container'>
        <ChoiceList
          choices={choices}
          onSetChoices={setChoices}
          onSetHistory={setHistory}
        />
      </div>
      <div className='history-container'>
        <History
          history={history}
          choices={choices}
          onSetHistory={setHistory}
        />
      </div>
    </div>
  );
};

export default App;
