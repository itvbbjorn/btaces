import React, { useState } from 'react';
import './App.css';
import MovePhaseDisplay from './MovePhaseDisplay';
import CombatPhaseDisplay from './CombatPhaseDisplay';
import GetRandomCard from './GetRandomCard';
import { AcesCard } from './cards';
import UnitList from './UnitList'; // Import UnitList component

function App() {
  const [randomCard, setRandomCard] = useState<AcesCard | null>(null);
  const [units, setUnits] = useState<Array<{ Name: string; Type: string; AssignedCard: string }>>([]);

  return (
    <div className="App">
      <GetRandomCard onSelect={setRandomCard} />
      <MovePhaseDisplay card={randomCard} />
      <CombatPhaseDisplay card={randomCard} />
      <UnitList units={units} setUnits={setUnits} /> {/* Use UnitList component */}
    </div>
  );
}

export default App;
