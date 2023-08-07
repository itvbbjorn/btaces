import React, { useEffect, useState } from 'react';
import { DetailsList, IColumn, Panel, Selection, PanelType, PrimaryButton, DefaultButton, SelectionMode, CheckboxVisibility } from '@fluentui/react';
import AddUnit from './AddUnit';
import cards, { AcesCard } from './cards';
import UnitPanel from './UnitPanel';
import AddUnitRow from './AddUnitRow';

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
  const [showAddUnitRow, setShowAddUnitRow] = useState(false);


  const handleSaveNewUnit = (unit: Unit) => {
    setUnits([...units, unit]);
    setShowAddUnitRow(false); // Hide the AddUnitRow after saving
  };
  
  const handleShowAddUnitRow = () => {
    setShowAddUnitRow(true); // Show the AddUnitRow when requested
  };
  

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
    { key: 'AssignedCard', name: 'Assigned Card', fieldName: 'AssignedCard', minWidth: 20, maxWidth: 40 },
  ];
  
  return (
    <div>
      {showAddUnit && <AddUnit onAddUnit={handleAddUnit} />}
      <DetailsList
        items={units}
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
      <AddUnitRow onSave={handleSaveNewUnit} />
    ) : (
      <PrimaryButton onClick={handleShowAddUnitRow}>Add new</PrimaryButton>
    )}

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
