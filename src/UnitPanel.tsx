import React, { useEffect } from 'react';
import { DefaultButton, Panel, PanelType, PrimaryButton, Stack, Dialog, DialogType} from '@fluentui/react';
import { AcesCard } from './cards';
import { Unit } from './UnitList';
import MovePhaseDisplay from './MovePhaseDisplay';
import CombatPhaseDisplay from './CombatPhaseDisplay';
import { initializeIcons } from "@fluentui/react/lib/Icons";
import './UnitPanelStyles.css'

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
  

  const UnitPanel: React.FC<UnitPanelProps> = ({
        selectedUnit,
        isOpen,
        onDismiss,
        handleDrawCard,
        getAssignedCard,
        handleDeleteUnit,
    }) => {
    const [isDeleteDialogVisible, setIsDeleteDialogVisible] = React.useState<boolean>(false);
  
    const onDeleteConfirmation = React.useCallback(() => {
        if (selectedUnit) {
            handleDeleteUnit(selectedUnit);
            setIsDeleteDialogVisible(false);
        }
    }, [selectedUnit, handleDeleteUnit]);
  
    const onRenderFooterContent = React.useCallback(
        () => (
            <div>
            <PrimaryButton styles={{ root: { marginRight: 8 } }} onClick={() => selectedUnit && handleDrawCard(selectedUnit)}>Draw card</PrimaryButton>
            <DefaultButton styles={{ root: { backgroundColor: "red", color: "white", marginRight: 8 } }} onClick={() => setIsDeleteDialogVisible(true)}>Delete</DefaultButton>
            <DefaultButton onClick={onDismiss}>Close</DefaultButton>
            </div>
        ),
        [selectedUnit, onDismiss, handleDrawCard],
    );
    
    // Draw a card if the selected unit doesn't have one yet.
    useEffect(() => {
        if (selectedUnit && !getAssignedCard(selectedUnit.Initiative)) {
          handleDrawCard(selectedUnit);
        }
      }, [selectedUnit, getAssignedCard, handleDrawCard]);

    return (
        <Panel
        isOpen={isOpen}
        onDismiss={onDismiss}
        type={PanelType.smallFixedFar}
        headerText={selectedUnit?.Name}
        isLightDismiss
        onRenderFooterContent={onRenderFooterContent}
        >
        {selectedUnit && (
            <div>
                <div className='unit-details'>
                    <div>
                        <p>{selectedUnit.Type} - {getAssignedCard(selectedUnit.Initiative)?.sequence}/8</p>
                        <p className="movement-phase-text">Movement Phase</p>
                    </div>
                    <div className="initiative-box">{selectedUnit.Initiative}</div>
                </div>
                
                <Stack tokens={{childrenGap: 15}}> 
                    <div className="movement-phase-display">
                        <MovePhaseDisplay card={getAssignedCard(selectedUnit.Initiative) || null} />
                    </div>
                    <div className="combat-phase-display">
                        <CombatPhaseDisplay card={getAssignedCard(selectedUnit.Initiative) || null} />
                        <br/>
                    </div>
                </Stack>
                
            </div>
        )}
            <Dialog
                hidden={!isDeleteDialogVisible}
                onDismiss={() => setIsDeleteDialogVisible(false)}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: 'Delete Unit',
                    subText: 'Are you sure you want to delete this unit?',
                }}
                modalProps={{
                    isBlocking: true,
                    styles: { main: { maxWidth: 450 } },
                }}
            >
                <PrimaryButton styles={{ root: { marginRight: 8 } }} onClick={onDeleteConfirmation} text="Confirm" />
                <DefaultButton onClick={() => setIsDeleteDialogVisible(false)} text="Cancel" />
            </Dialog>
        </Panel>
    );
};

export default UnitPanel;
