import React from 'react';
import { AcesCard } from './cards';
import { Stack, Text, List } from '@fluentui/react';
import './PhaseDisplay.css';

interface MovePhaseDisplayProps {
  card: AcesCard | null;
}

const MovePhaseDisplay: React.FC<MovePhaseDisplayProps> = ({ card }) => {
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {card && (
        <Stack>
          <Text variant="large"><b>Movement Phase</b></Text>
          <Stack horizontal tokens={{ childrenGap: 10 }}>
            <Text variant="large">{card.type}</Text>
            <Text variant="large">{card.sequence}/8</Text>
            <div className='blackBox'>
              {card.id}
            </div>
          </Stack>
          
          <Stack>
            
            <Text>{card.movePhase.first}</Text>
            <List
              items={card.movePhase.moveActions}
              onRenderCell={(item, index) => {
                // Validate that index is not undefined
                if (typeof index === 'undefined') {
                  return null;
                }
                return (
                  <div
                    key={index}
                    className={`row ${index % 2 === 0 ? 'lightRow' : ''}`}
                  >
                    {item}
                  </div>
                );
              }}
            />
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default MovePhaseDisplay;
