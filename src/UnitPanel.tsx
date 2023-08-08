import React, { useEffect } from 'react';
import { DefaultButton, Panel, PanelType, PrimaryButton, Stack, Dialog, DialogType, Icon} from '@fluentui/react';
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
        moveDone: boolean;
        combatDone: boolean;
    } | null;
    isOpen: boolean;
    onDismiss: () => void;
    handleDrawCard: (unit: Unit) => void;
    getAssignedCard: (assignedCardId: string) => AcesCard | undefined;
    handleDeleteUnit: (unit: Unit) => void;
    units: Unit[];
    unitIndex: number;
    setSelectedUnit: (unit: Unit | null) => void;
    updateUnit: (unit: Unit) => void;
  }

  const UnitPanel: React.FC<UnitPanelProps> = ({
        units,
        unitIndex,
        setSelectedUnit,
        selectedUnit,
        isOpen,
        onDismiss,
        handleDrawCard,
        getAssignedCard,
        handleDeleteUnit,
        updateUnit,
    }) => {
    const [isDeleteDialogVisible, setIsDeleteDialogVisible] = React.useState<boolean>(false);
  
    const onDeleteConfirmation = React.useCallback(() => {
        if (selectedUnit) {
            handleDeleteUnit(selectedUnit);
            setIsDeleteDialogVisible(false);
        }
    }, [selectedUnit, handleDeleteUnit]);
  
    const isPrevDisabled = unitIndex === 0; // Disable if first unit
    const isNextDisabled = unitIndex === units.length - 1; // Disable if last unit

    const handleNextUnit = () => {
        const nextIndex = (unitIndex + 1) % units.length;
        setSelectedUnit(units[nextIndex]);
    };
    
      const handlePreviousUnit = () => {
        const prevIndex = (unitIndex - 1 + units.length) % units.length;
        setSelectedUnit(units[prevIndex]);
    };
    const handleCompleteMove = () => {
        if (selectedUnit) {
          const updatedUnit = {
            ...selectedUnit,
            moveDone: true,
          };
          setSelectedUnit(updatedUnit);
          updateUnit(updatedUnit);
        }
      };
      
      const handleCompleteCombat = () => {
        if (selectedUnit) {
          const updatedUnit = {
            ...selectedUnit,
            combatDone: true,
          };
          setSelectedUnit(updatedUnit);
          updateUnit(updatedUnit);
        }
      };

    const onRenderFooterContent = React.useCallback(
        () => (
            <Stack>
                <div className='footer-content'>
                    <div className='util-buttons'>
                        <DefaultButton styles={{ root: { marginRight: 8 } }} onClick={() => selectedUnit && handleDrawCard(selectedUnit)}>New card</DefaultButton>
                        <DefaultButton styles={{ root: { marginRight: 8 } }} onClick={onDismiss}>Close</DefaultButton>
                        <DefaultButton styles={{ root: { backgroundColor: "red", color: "white" } }} onClick={() => setIsDeleteDialogVisible(true)}>Delete</DefaultButton>
                    </div>
                    <div className='navigation-buttons'>
                        <DefaultButton onClick={handlePreviousUnit} disabled={units.length < 2 || isPrevDisabled}><Icon iconName="ChevronLeft" /></DefaultButton>
                        <DefaultButton onClick={handleNextUnit} disabled={units.length < 2 || isNextDisabled}><Icon iconName="ChevronRight" /></DefaultButton>
                    </div>
                </div>
            </Stack>
        ),
        [selectedUnit, onDismiss, handleDrawCard, isNextDisabled, handlePreviousUnit, handleNextUnit],
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
        hasCloseButton={false}
        onRenderFooterContent={onRenderFooterContent}
        isFooterAtBottom={true}
        onRenderHeader={() => (
            <div className='header-content'>
              <h2>{selectedUnit?.Name}</h2>
            </div>
          )}
        >
        <div className='panel-content'>
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
                        <div className="movement-phase-display" style={{ position: 'relative' }}>
                            {selectedUnit?.moveDone && <div className="overlay"></div>}
                            <MovePhaseDisplay card={getAssignedCard(selectedUnit?.Initiative) || null} />
                        </div>

                        <div className="combat-phase-display" style={{ position: 'relative' }}>
                            {selectedUnit?.combatDone && <div className="overlay"></div>}
                            <CombatPhaseDisplay card={getAssignedCard(selectedUnit?.Initiative) || null} />
                            <br/>
                        </div>
                        {selectedUnit && !selectedUnit.moveDone && (
                            <PrimaryButton onClick={handleCompleteMove} text="Complete Move" />
                        )}

                        {selectedUnit && selectedUnit.moveDone && !selectedUnit.combatDone && (
                            <PrimaryButton onClick={handleCompleteCombat} text="Complete Combat" />
                        )}

                        {selectedUnit && selectedUnit.moveDone && selectedUnit.combatDone && (
                            <DefaultButton disabled text='Turn Complete' />
                        )}
                    </Stack>
                </div>
            )}
        </div>
        
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
