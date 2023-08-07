import React, { useState } from 'react';
import { List, DetailsList, Panel, PanelType, PrimaryButton, DefaultButton, TextField, Stack } from '@fluentui/react';
import AddUnit from './AddUnit';
import cards, { AcesCard } from './cards';
import UnitPanel from './UnitPanel';

export interface Unit {
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
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [showPanel, setShowPanel] = useState(false);

  const handleAddUnit = (unit: Unit) => {
    setUnits([...units, unit]);
    setShowAddUnit(false);
  };

  const handleRemoveUnit = (index: number) => {
    setUnits(units.filter((_, idx) => idx !== index));
  };

  const handleUnitClick = (unit: Unit) => {
    setSelectedUnit(unit);
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  const getAssignedCard = (assignedCardId: string): AcesCard | undefined => {
    return cards.find(card => card.id === assignedCardId);
  };
  const drawCard = (unitType: string): AcesCard | undefined => {
    const filteredCards = cards.filter(card => card.type === unitType);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    return filteredCards[randomIndex];
  };
  const handleDrawCard = (unit: Unit) => {
    const drawnCard = drawCard(unit.Type);
    if (drawnCard) {
      const updatedUnit = { ...unit, AssignedCard: drawnCard.id };
      setUnits(units.map(u => u === unit ? updatedUnit : u));
      setSelectedUnit(updatedUnit); 
    }
  };
  
  return (
    <div>
      <button onClick={() => setShowAddUnit(true)}>Add Unit</button>
      {showAddUnit && <AddUnit onAddUnit={handleAddUnit} />}
      <List
        items={units}
        onRenderCell={(unit, index) => (
          <div key={index} onClick={() => handleUnitClick(unit as Unit)}>
            <span>Name: {unit?.Name}, Type: {unit?.Type}, Assigned Card: {unit?.AssignedCard}</span>
            <DefaultButton color="red" onClick={(e) => { e.stopPropagation(); handleRemoveUnit(index as number); }}>Remove</DefaultButton>
          </div>
        )}
        
      />
      <UnitPanel 
        selectedUnit={selectedUnit} 
        isOpen={showPanel} 
        onDismiss={closePanel} 
        handleDrawCard={handleDrawCard} 
        getAssignedCard={getAssignedCard} 
      />
    </div>
  );
};

export default UnitList;
