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
          <Stack tokens={{ childrenGap: 20 }}>
            <div className='first'>
              <Text>{card.movePhase.first}</Text>
            </div>
            <List
              items={card.movePhase.moveActions}
              onRenderCell={(item, index) => {
                // Validate that index is not undefined
                if (typeof index === 'undefined' || typeof item !== 'string') {
                  return null;
                }

                // Define the mapping for the keywords. PSPRINT because i want to use the first letter lol
                const iconMapping: Record<'JUMP' | 'GROUND' | 'PSPRINT' | 'STANDSTILL', string> = {
                  'JUMP': 'jump-icon',
                  'GROUND': 'ground-icon',
                  'PSPRINT': 'sprint-icon',
                  'STANDSTILL': 'stand-icon',
                };

                // Split the text by spaces and handle each word individually
                  const parts = item.split(' ').map((word, partIndex) => {
                    const iconClass = iconMapping[word as 'JUMP' | 'GROUND' | 'PSPRINT' | 'STANDSTILL'];
                    if (iconClass) {
                      return (
                        <span key={partIndex}>
                          <div className={iconClass}>{word.charAt(0)}</div>
                        </span>
                      );
                    } else {
                      return word + ' ';
                    }
                  });
                // Color every other row light grey
                return (
                  <div key={index} className={`row ${index % 2 === 0 ? 'lightRow' : ''}`}>
                    {parts}
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