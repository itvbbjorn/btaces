import React from 'react';
import { AcesCard } from './cards';
import { Stack, Text, List, StackItem } from '@fluentui/react';
import './PhaseDisplay.css';

interface CombatPhaseDisplayProps {
  card: AcesCard | null;
}

const CombatPhaseDisplay: React.FC<CombatPhaseDisplayProps> = ({ card }) => {
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {card && (
        <Stack>
            <Text className='combat-phase-text'>Combat Phase</Text>
            <div className='instruction-container'>
                {card.combatPhase.instruction && <span className='instruction-text'>Instruction: <b>{card.combatPhase.instruction}</b></span>}
            </div>
            <div className='hexContainer'>
                <Stack horizontal >
                    {card.combatPhase.combatActions.map((item, index) => {
                    let hexagon;
                    switch(item.modifier) {
                        case "-":
                            hexagon = (
                                <div className='minusHexagon'>
                                    <div className='centerText'><b>{item.combatType}<br/>{item.modifier}</b> </div>
                                </div>
                            );
                            break;
                        case "+":
                            hexagon = (
                                <div className='plusHexagon'>
                                    <div className='centerText'><b>{item.modifier} <br/> {item.combatType}</b></div>
                                </div>
                            );
                            break;
                        case "check":
                            hexagon = (
                                <div className='checkHexagon'>
                                    <div className='centerText'>{item.combatType}</div>
                                </div>
                            );
                            break;
                        default:
                            hexagon = null;
                            break;
                    }
                    return (
                        <Stack.Item key={index} styles={{ root: { padding: 3 } }}>
                            {hexagon}
                        </Stack.Item>
                    );
                })}
                </Stack>
            </div>
        </Stack>
      )}
    </Stack>
  );
};

export default CombatPhaseDisplay;
