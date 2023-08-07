import React from 'react';
import { AcesCard } from './cards';
import { Stack, Text, List } from '@fluentui/react';
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
            <Stack horizontal tokens={{ childrenGap: 10 }}>
                <Text variant="large">{card.type}</Text>
                <Text variant="large">{card.sequence}/8</Text>
                <div className='blackBox'>
                    {card.id}
                </div>
                </Stack>
          <Stack>
            {card.combatPhase.instruction && <Text variant='large'><b>Instruction: {card.combatPhase.instruction}</b></Text>}
            <List
              items={card.combatPhase.combatActions}
              onRenderCell={(item, index) => {
                if (typeof index === 'undefined' || !item) {
                  return null;
                }
                return (
                  <div key={index} className={`row ${index % 2 === 0 ? 'lightRow' : ''}`}>
                    <div className="column">{item.modifier}</div>
                    <div className="column">{item.combatType}</div>
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

export default CombatPhaseDisplay;
