import React from 'react';
import { Panel, PanelType, PrimaryButton } from '@fluentui/react';
import { AcesCard } from './cards';
import { Unit } from './UnitList';
import MovePhaseDisplay from './MovePhaseDisplay';
import CombatPhaseDisplay from './CombatPhaseDisplay';

interface UnitPanelProps {
  selectedUnit: {
    Name: string;
    Type: string;
    AssignedCard: string;
  } | null;
  isOpen: boolean;
  onDismiss: () => void;
  handleDrawCard: (unit: Unit) => void;
  getAssignedCard: (assignedCardId: string) => AcesCard | undefined;
}

const UnitPanel: React.FC<UnitPanelProps> = ({ selectedUnit, isOpen, onDismiss, handleDrawCard, getAssignedCard }) => {
  return (
    <Panel
      isOpen={isOpen}
      onDismiss={onDismiss}
      type={PanelType.smallFixedFar}
      headerText="Unit Details"
    >
      {selectedUnit && (
        <div>
          <p>Name: {selectedUnit.Name}</p>
          <p>Type: {selectedUnit.Type}</p>
          <p>Assigned Card:</p>
          <MovePhaseDisplay card={getAssignedCard(selectedUnit.AssignedCard) || null} />
          <CombatPhaseDisplay card={getAssignedCard(selectedUnit.AssignedCard) || null} />
          <PrimaryButton onClick={() => handleDrawCard(selectedUnit)}>Draw card</PrimaryButton>
        </div>
      )}
    </Panel>
  );
};

export default UnitPanel;
