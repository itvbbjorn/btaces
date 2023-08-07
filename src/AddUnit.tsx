import React, { useState } from 'react';
import { Dropdown, IDropdownOption } from '@fluentui/react';

interface Unit {
  Name: string;
  Type: string;
  AssignedCard: string;
}

interface AddUnitProps {
  onAddUnit: (unit: Unit) => void;
}

const typeOptions: IDropdownOption[] = [
  { key: 'Striker', text: 'Striker' },
  { key: 'Brawler', text: 'Brawler' },
];

const AddUnit: React.FC<AddUnitProps> = ({ onAddUnit }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<IDropdownOption | undefined>(undefined);
  const [assignedCard, setAssignedCard] = useState('');

  const handleAdd = () => {
    if (name && type) {
      onAddUnit({ Name: name, Type: type.text, AssignedCard: assignedCard });
      setName('');
      setType(undefined);
      setAssignedCard('');
    } else {
        console.log("Fill in all fields");
    }
  };

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Dropdown
        placeholder="Type"
        options={typeOptions}
        selectedKey={type?.key}
        onChange={(_, option) => setType(option)}
      />
      <input
        type="text"
        placeholder="Assigned Card"
        value={assignedCard}
        onChange={(e) => setAssignedCard(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddUnit;
