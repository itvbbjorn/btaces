import React from 'react';
import { AcesCard } from './cards';
import { Stack, Text } from '@fluentui/react';

interface CardDisplayProps {
  card: AcesCard | null;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card }) => {
  return (
    <Stack tokens={{ childrenGap: 10 }}>
      {card && (
        <Stack>
          <Text variant="large">ID: {card.id}</Text>
          <Text variant="medium">Type: {card.type}</Text>
          <Text variant="medium">Sequence: {card.sequence}</Text>
          <Stack>
            <Text variant="mediumPlus">Move Phase</Text>
            <Text>First: {card.movePhase.first}</Text>
            <ul>
              {card.movePhase.moveActions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </Stack>
          <Stack>
            <Text variant="mediumPlus">Combat Phase</Text>
            {card.combatPhase.instruction && <Text>Instruction: {card.combatPhase.instruction}</Text>}
            <Text>Combat Actions:</Text>
            <ul>
              {card.combatPhase.combatActions.map((action, index) => (
                <li key={index}>
                  Order: {action.order}, Combat Type: {action.combatType}, Modifier: {action.modifier}
                </li>
              ))}
            </ul>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default CardDisplay;
