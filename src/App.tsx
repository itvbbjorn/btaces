import React, { useState } from 'react';
import './App.css';
import MovePhaseDisplay from './MovePhaseDisplay';
import CombatPhaseDisplay from './CombatPhaseDisplay';
import GetRandomCard from './GetRandomCard';
import { AcesCard } from './cards';
import UnitList from './UnitList'; // Import UnitList component
import AddUnit from './AddUnit';
import { DetailsList, SelectionMode } from '@fluentui/react';

function App() {
  const [randomCard, setRandomCard] = useState<AcesCard | null>(null);
  const [units, setUnits] = useState<Array<{ Name: string; Type: string; AssignedCard: string }>>([]);
  const [showAddUnit, setShowAddUnit] = useState(false);
  
  return (
    <div className="App">
      <UnitList units={units} setUnits={setUnits} />
    </div>
  );
}

export default App;
