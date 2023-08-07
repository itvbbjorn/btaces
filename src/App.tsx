import React, { useState } from 'react';
import './App.css';
import UnitList from './UnitList'; 

function App() {
  const [units, setUnits] = useState<Array<{ Name: string; Type: string; AssignedCard: string }>>([]);
  
  return (
    <div className="App">
      <UnitList units={units} setUnits={setUnits} />
    </div>
  );
}

export default App;
