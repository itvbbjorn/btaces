import React, { useState } from 'react';
import './App.css';
import CardDisplay from './CardDisplay';
import MovePhaseDisplay from './MovePhaseDisplay';
import CombatPhaseDisplay from './CombatPhaseDisplay';
import GetRandomCard from './GetRandomCard';
import { AcesCard } from './cards';

function App() {
  const [randomCard, setRandomCard] = useState<AcesCard | null>(null);

  return (
    <div className="App">
      <GetRandomCard onSelect={setRandomCard} />
      <MovePhaseDisplay card={randomCard} />
      <CombatPhaseDisplay card={randomCard} />
    </div>
  );
}

export default App;
