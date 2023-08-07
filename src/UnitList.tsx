import React, { useState } from 'react';
import { List } from '@fluentui/react';
import AddUnit from './AddUnit';

interface Unit {
  Name: string;
  Type: string;
  AssignedCard: string;
}

interface UnitListProps {
  units: Unit[];
  setUnits: (units: Unit[]) => void;
}

const UnitList: React.FC<UnitListProps> = ({ units, setUnits }) => {
  const [showAddUnit, setShowAddUnit] = useState(false);

  const handleAddUnit = (unit: Unit) => {
    setUnits([...units, unit]);
    setShowAddUnit(false);
  };

  const handleRemoveUnit = (index: number) => {
    setUnits(units.filter((_, idx) => idx !== index));
  };

  return (
    <div>
      <button onClick={() => setShowAddUnit(true)}>Add Unit</button>
      {showAddUnit && <AddUnit onAddUnit={handleAddUnit} />}
      <List
        items={units}
        onRenderCell={(unit, index) => (
          <div key={index}>
            <span>Name: {unit?.Name}, Type: {unit?.Type}, Assigned Card: {unit?.AssignedCard}</span>
            <button onClick={() => handleRemoveUnit(index as number)}>Remove</button>
          </div>
        )}
      />
    </div>
  );
};

export default UnitList;
