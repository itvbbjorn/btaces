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
            <Text variant="large"><b>Combat Phase</b></Text>
            {/* <Stack horizontal tokens={{ childrenGap: 10 }}>
                <Text variant="large">{card.type}</Text>
                <Text variant="large">{card.sequence}/8</Text>
                <div className='blackBox'>
                    {card.id}
                </div>
            </Stack> */}
          <Stack>
            {card.combatPhase.instruction && <Text variant='large'><b>Instruction: {card.combatPhase.instruction}</b></Text>}
            <Stack horizontal>
            {card.combatPhase.combatActions.map((item, index) => {
                let hexagon;

                switch(item.modifier) {
                    case "-":
                        hexagon = (
                            <div className='minusHexagon'>
                                <div className='centerText'><b>{item.modifier}</b> {item.combatType}</div>
                            </div>
                        );
                        break;
                    case "+":
                        hexagon = (
                            <div className='plusHexagon'>
                                <div className='centerText'><b>{item.modifier}</b> {item.combatType}</div>
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
            {/* <List
              items={card.combatPhase.combatActions}
              onRenderCell={(item, index) => {
                if (typeof index === 'undefined' || !item) {
                  return null;
                }
                return (
                  <div key={index} className={`row ${index % 2 === 0 ? 'lightRow' : ''}`}>
                    <div className="column">{item.modifier}</div>
                    <div className="column">{item.combatType}</div> 
                    <div className="checkHexagon"></div>
                  </div>
                );
              }}
            /> */}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default CombatPhaseDisplay;
