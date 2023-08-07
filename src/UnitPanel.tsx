import React from 'react';
import { DefaultButton, Panel, PanelType, PrimaryButton, Stack} from '@fluentui/react';
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
  handleDeleteUnit: (unit: Unit) => void; 
}

const UnitPanel: React.FC<UnitPanelProps> = ({ selectedUnit, isOpen, onDismiss, handleDrawCard, getAssignedCard, handleDeleteUnit }) => {
  return (
    <Panel
      isOpen={isOpen}
      onDismiss={onDismiss}
      type={PanelType.smallFixedFar}
      headerText="Unit Details"
      isLightDismiss
    >
      {selectedUnit && (
        <div>
            <p>Name: {selectedUnit.Name}</p>
            <p>Type: {selectedUnit.Type}</p>
            <p>Assigned Card:</p>
            <MovePhaseDisplay card={getAssignedCard(selectedUnit.AssignedCard) || null} />
            <CombatPhaseDisplay card={getAssignedCard(selectedUnit.AssignedCard) || null} />
            <Stack horizontal>
                <Stack.Item styles={{ root: { padding: 10 } }}>
                    <PrimaryButton onClick={() => handleDrawCard(selectedUnit)}>Draw card</PrimaryButton>
                </Stack.Item>
                <Stack.Item styles={{ root: { padding: 10 } }}>
                    <DefaultButton onClick={() => handleDeleteUnit(selectedUnit)}>Delete</DefaultButton>
                </Stack.Item>
            </Stack>
        </div>
      )}
    </Panel>
  );
};

export default UnitPanel;
