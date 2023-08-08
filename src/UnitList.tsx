import React, { useEffect, useState } from 'react';
import { DetailsList, Selection, PrimaryButton, SelectionMode, Stack, DefaultButton } from '@fluentui/react';
import AddUnit from './AddUnit';
import cards, { AcesCard } from './cards';
import UnitPanel from './UnitPanel';
import AddUnitRow from './AddUnitRow';

export interface Unit {
  Name: string;
  Type: string;
  Initiative: string;
  moveDone: boolean;
  combatDone: boolean;
}

interface UnitListProps {
  units: Unit[];
  setUnits: (units: Unit[]) => void;
}

const UnitList: React.FC<UnitListProps> = ({ units, setUnits }) => {
  const [showAddUnit, setShowAddUnit] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [showAddUnitRow, setShowAddUnitRow] = useState(false);


  const handleSaveNewUnit = (unit: Unit) => {
    setUnits([...units, unit]);
    setShowAddUnitRow(false); // Hide the AddUnitRow after saving
  };
  
  const handleShowAddUnitRow = () => {
    setShowAddUnitRow(true); // Show the AddUnitRow when requested
  };
  
  const handleHideAddUnitRow = () => {
    setShowAddUnitRow(false); // Hide AddUnitRow
  }

  const handleAddUnit = (unit: Unit) => {
    setUnits([...units, unit]);
    setShowAddUnit(false);
  };

  const handleDeleteUnit = (unit: Unit) => {
    setUnits(units.filter(u => u !== unit));
    setShowPanel(false); // Close the panel after deletion
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

  const sortedUnits = units
  .map(unit => ({
    unit,
    assignedCard: getAssignedCard(unit.Initiative)
  }))
  .sort((a, b) => {
    return (a.assignedCard?.id || '').localeCompare(b.assignedCard?.id || '');
  })
  .map(item => item.unit); // Extract just the sorted units


  const drawCard = (unitType: string): AcesCard | undefined => {
    const filteredCards = cards.filter(card => card.type === unitType);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    return filteredCards[randomIndex];
  };

  const handleDrawCard = (unit: Unit) => {
    const drawnCard = drawCard(unit.Type);
    if (drawnCard) {
      const updatedUnit = { ...unit, Initiative: drawnCard.id };
      setUnits(units.map(u => u === unit ? updatedUnit : u));
      setSelectedUnit(updatedUnit);
      console.log("drew card")
    }
  };
  const handleRandomizeAllCards = () => {
    const updatedUnits = units.map(unit => {
      const drawnCard = drawCard(unit.Type);
      if (drawnCard) {
        return { ...unit, Initiative: drawnCard.id };
      }
      return unit; // return unit unchanged if no card drawn
    });
  
    setUnits(updatedUnits);
  };
  

  const [selectedItem, setSelectedItem] = useState<Unit | undefined>();

  const selection = new Selection({
    onSelectionChanged: () => {
      setSelectedItem(selection.getSelection()[0] as Unit);
    },
  });

  useEffect(() => {
    if (selectedItem) {
      handleUnitClick(selectedItem);
    }
  }, [selectedItem]);

  const columns = [
    { key: 'Name', name: 'Name', fieldName: 'Name', minWidth: 50, maxWidth: 100 },
    { key: 'Type', name: 'Type', fieldName: 'Type', minWidth: 50, maxWidth: 50 },
    { key: 'Initiative', name: 'Initiative', fieldName: 'Initiative', minWidth: 20, maxWidth: 40 },
    { key: 'moveDone', name: 'Move Done', fieldName: 'moveDone', minWidth: 20, maxWidth: 40, onRender: (item: Unit) => item.moveDone ? 'Yes' : 'No' },
    { key: 'combatDone', name: 'Combat Done', fieldName: 'combatDone', minWidth: 20, maxWidth: 40, onRender: (item: Unit) => item.combatDone ? 'Yes' : 'No' },
];

  
  
  
  return (
    <div>
      {showAddUnit && <AddUnit onAddUnit={handleAddUnit} />}
      <DetailsList
        items={sortedUnits}
        columns={columns}
        selectionMode={SelectionMode.none}
        onRenderRow={(props, defaultRender) => {
          if (props) {
            return (
              <div onClick={() => handleUnitClick(props.item as Unit)}>
                {defaultRender?.(props)}
              </div>
            );
          }
          return null;
        }}
      />
      {/* Conditionally render the AddUnitRow component */}
    {showAddUnitRow ? (
      <AddUnitRow 
      onSave={handleSaveNewUnit} 
      onCancel={handleHideAddUnitRow}
      />
    ) : (
      <Stack horizontal>
        <PrimaryButton disabled={units.length<1} styles={{root: {marginLeft: 8, marginRight: 8, marginTop: 10}}} onClick={handleRandomizeAllCards}>Draw cards</PrimaryButton>
        <DefaultButton styles={{root: {marginRight: 8, marginTop: 10}}} onClick={handleShowAddUnitRow}>Add unit</DefaultButton>
      </Stack>
    )}
    <UnitPanel 
      units={sortedUnits}
      unitIndex={selectedUnit ? sortedUnits.indexOf(selectedUnit) : -1}
      setSelectedUnit={setSelectedUnit}
      selectedUnit={selectedUnit} 
      isOpen={showPanel} 
      onDismiss={closePanel} 
      handleDrawCard={handleDrawCard} 
      getAssignedCard={getAssignedCard}
      handleDeleteUnit={handleDeleteUnit}
    />
  </div>
  );
};

export default UnitList;
