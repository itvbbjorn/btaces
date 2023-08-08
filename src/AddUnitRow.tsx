import React, { useState } from 'react';
import { TextField, Dropdown, PrimaryButton, IDropdownOption, Stack } from '@fluentui/react';
import { Unit } from './UnitList';
import './AddUnit.css'

interface AddUnitRowProps {
  onSave: (unit: Unit) => void;
}

const typeOptions: IDropdownOption[] = [
  { key: "Skirmisher", text: "Skirmisher" },
  { key: "Brawler", text: "Brawler" },
  { key: "Sniper", text: "Sniper" },
  { key: "Striker", text: "Striker" },

];

const AddUnitRow: React.FC<AddUnitRowProps> = ({ onSave }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<IDropdownOption | undefined>(undefined);
  const [assignedCard, setAssignedCard] = useState('');

  const handleSave = () => {
    if (name && type) {
      onSave({ Name: name, Type: type.text, Initiative: assignedCard });
      setName('');
      setType(undefined);
      setAssignedCard('');
    } else {
      console.log("Fill in all fields");
    }
  };

  return (
    <div className='listForm'>
    <Stack horizontal>
        <Stack.Item styles={{ root: { padding: 10 } }}>
            <TextField placeholder="Unit name" value={name} onChange={(_, newValue) => setName(newValue || '')} />
        </Stack.Item>
        <Stack.Item styles={{ root: { padding: 10 } }}>
            <Dropdown placeholder="Select unit type" options={typeOptions} selectedKey={type?.key} onChange={(_, option) => setType(option)} />
        </Stack.Item>
        <Stack.Item styles={{ root: { padding: 10 } }}>
            <PrimaryButton onClick={handleSave}>Save</PrimaryButton>
        </Stack.Item>
    </Stack>
</div>
  );
};

export default AddUnitRow;