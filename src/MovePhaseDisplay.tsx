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
          <Stack tokens={{childrenGap: 20}}>
            <div className='first'>
              <Text>{card.movePhase.first}</Text>
            </div>
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
