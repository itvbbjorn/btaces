import React, { useState } from 'react';
import { Dropdown, IDropdownOption, PrimaryButton, Stack, TextField } from '@fluentui/react';
import './AddUnitStyles.css';

interface Unit {
  Name: string;
  Type: string;
  Initiative: string;
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
      onAddUnit({ Name: name, Type: type.text, Initiative: assignedCard });
      setName('');
      setType(undefined);
      setAssignedCard('');
    } else {
        console.log("Fill in all fields");
    }
  };

  const itemStyles = { root: { padding: 10 } };

  return (
    <div>
        <Stack horizontal horizontalAlign="start" verticalAlign="center">
            <Stack.Item grow styles={itemStyles}>
                <TextField
                    placeholder="Name"
                    value={name}
                    onChange={(_, newValue) => setName(newValue || '')}
                />
            </Stack.Item>
            <Stack.Item grow styles={itemStyles}>
                <Dropdown
                    placeholder="Select unit type"
                    options={typeOptions}
                    selectedKey={type?.key}
                    onChange={(_, option) => setType(option)}
                />
            </Stack.Item>
            <Stack.Item align="center">
                <PrimaryButton onClick={handleAdd}>Add</PrimaryButton>
            </Stack.Item>
        </Stack>
    </div>
  );
};

export default AddUnit;
