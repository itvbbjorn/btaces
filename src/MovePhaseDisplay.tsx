import React from 'react';
import { AcesCard } from './cards';
import { Stack, List } from '@fluentui/react';
import './PhaseDisplayStyles.css';

interface MovePhaseDisplayProps {
  card: AcesCard | null;
}

const MovePhaseDisplay: React.FC<MovePhaseDisplayProps> = ({ card }) => {
  // Define the mapping for the keywords outside the rendering
  const iconMapping: Record<'JUMP' | 'GROUND' | 'PSPRINT' | 'STANDSTILL', string> = {
    'JUMP': 'jump-icon',
    'GROUND': 'ground-icon',
    'PSPRINT': 'sprint-icon',
    'STANDSTILL': 'stand-icon',
  };

  // Function to replace words with icons
  const replaceWordsWithIcons = (text: string) => {
    return text.split(' ').map((word, partIndex) => {
      const iconClass = iconMapping[word as 'JUMP' | 'GROUND' | 'PSPRINT' | 'STANDSTILL'];
      if (iconClass) {
        return (
          <span key={partIndex}>
            <div className={iconClass}>{word.charAt(0)}</div>{' '}
          </span>
        );
      } else {
        return word + ' ';
      }
    });
  };

  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {card && (
        <Stack>
          <div className='first-header'>If first:</div>
          <Stack tokens={{ childrenGap: 20 }}>
            <div className='first'>
              {replaceWordsWithIcons(card.movePhase.first)}
            </div>
            <List
              items={card.movePhase.moveActions}
              onRenderCell={(item, index) => {
                // Validate that index is not undefined
                if (typeof index === 'undefined' || typeof item !== 'string') {
                  return null;
                }

                // Use the function to replace the words
                const parts = replaceWordsWithIcons(item);

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