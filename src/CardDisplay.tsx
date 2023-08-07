import React from 'react';
import { AcesCard } from './cards';

interface CardDisplayProps {
  card: AcesCard | null;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card }) => {
  return (
    <div>
      {card && (
        <div>
          <h2>{card.id}</h2>
          <p>{card.type}</p>
        </div>
      )}
    </div>
  );
};

export default CardDisplay;
