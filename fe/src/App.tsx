import { useState } from 'react';
import './App.css';
import ChoiceList from './components/ChoiceList';
import History from './components/History';
import { HistoryRecord } from './interfaces';

const App = () => {
  const [choices, setChoices] = useState<string[]>([]);
  const [history, setHistory] = useState<HistoryRecord[]>([]);

  return (
    <>
      <ChoiceList
        choices={choices}
        onSetChoices={setChoices}
        onSetHistory={setHistory}
      />
      <History history={history} choices={choices} onSetHistory={setHistory} />
    </>
  );
};

export default App;
