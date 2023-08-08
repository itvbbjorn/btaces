import React from 'react';
import { DefaultButton, Panel, PanelType, PrimaryButton, Stack} from '@fluentui/react';
import { AcesCard } from './cards';
import { Unit } from './UnitList';
import MovePhaseDisplay from './MovePhaseDisplay';
import CombatPhaseDisplay from './CombatPhaseDisplay';
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons();

interface UnitPanelProps {
  selectedUnit: {
    Name: string;
    Type: string;
    Initiative: string;
  } | null;
  isOpen: boolean;
  onDismiss: () => void;
  handleDrawCard: (unit: Unit) => void;
  getAssignedCard: (assignedCardId: string) => AcesCard | undefined;
  handleDeleteUnit: (unit: Unit) => void; 
}

const UnitPanel: React.FC<UnitPanelProps> = ({ selectedUnit, isOpen, onDismiss, handleDrawCard, getAssignedCard, handleDeleteUnit }) => {
    const onRenderFooterContent = React.useCallback(
        () => (
          <div>
            <PrimaryButton onClick={() => selectedUnit && handleDrawCard(selectedUnit)}>Draw card</PrimaryButton>
            
            <DefaultButton onClick={() => selectedUnit && handleDeleteUnit(selectedUnit)}>Delete</DefaultButton>
          </div>
        ),
        [onDismiss],
      );
    
  return (
    <Panel
      isOpen={isOpen}
      onDismiss={onDismiss}
      type={PanelType.smallFixedFar}
      headerText="Unit Details"
      isLightDismiss
      onRenderFooterContent={onRenderFooterContent}
    >
      {selectedUnit && (
        <div>
            <p>Name: {selectedUnit.Name}</p>
            <p>Type: {selectedUnit.Type}</p>
            <p>Assigned Card:</p>
            <MovePhaseDisplay card={getAssignedCard(selectedUnit.Initiative) || null} />
            <CombatPhaseDisplay card={getAssignedCard(selectedUnit.Initiative) || null} />
        </div>
      )}
    </Panel>
  );
};

export default UnitPanel;
