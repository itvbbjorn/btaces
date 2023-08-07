import React, { useState } from 'react';
import './App.css';
import CardDisplay from './CardDisplay';
import GetRandomCard from './GetRandomCard';
import { AcesCard } from './cards';

function App() {
  const [randomCard, setRandomCard] = useState<AcesCard | null>(null);

  return (
    <div className="App">
      <GetRandomCard onSelect={setRandomCard} />
      <CardDisplay card={randomCard} />
    </div>
  );
}

export default App;
