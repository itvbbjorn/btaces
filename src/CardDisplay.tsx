import React, { useState } from 'react';
import cards, { AcesCard } from './cards';

const CardDisplay: React.FC = () => {
    // Hook to store the randomly selected object
    const [randomObject, setRandomObject] = useState<AcesCard | null>(null);

    // Function to select an object randomly
    const selectRandomCard = () => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        setRandomObject(cards[randomIndex]);
    };

    return (
        <div>
            <button onClick={selectRandomCard}>Select Random Object</button>
            {randomObject && (
                <div>
                    <h2>{randomObject.id}</h2>
                    <p>{randomObject.type}</p>
                </div>
            )}
        </div>
    );
};

export default CardDisplay;