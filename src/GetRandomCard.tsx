import React from 'react';
import cards, { AcesCard } from './cards';

interface GetRandomCardProps {
  onSelect: (card: AcesCard) => void;
}

const GetRandomCard: React.FC<GetRandomCardProps> = ({ onSelect }) => {
  const selectRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const selectedCard = cards[randomIndex];
    onSelect(selectedCard);
  };

  return <button onClick={selectRandomCard}>Select Random Card</button>;
};

export default GetRandomCard;
