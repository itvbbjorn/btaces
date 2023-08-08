import React, { useState } from 'react';
import './App.css';
import UnitList, { Unit } from './UnitList'; // Import the Unit type

function App() {
  // Define units using the Unit type
  const [units, setUnits] = useState<Unit[]>([]);
  
  return (
    <div className="App">
      <UnitList units={units} setUnits={setUnits} />
    </div>
  );
}

export default App;