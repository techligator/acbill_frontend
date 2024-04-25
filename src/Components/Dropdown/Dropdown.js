import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Dropdown.css'; // Import CSS file for animations

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={`${label.toLowerCase()}-label`} className="dropdown-label">{label}</InputLabel>
      <Select
        labelId={`${label.toLowerCase()}-label`}
        id={label.toLowerCase()}
        value={value}
        onChange={onChange}
        className="dropdown-select"
        variant="filled" // Use outlined variant to avoid space on focus
        inputProps={{ className: 'dropdown-input' }} // Add a class to the input for custom styles
      >
        {options.map((option, index) => (
          <MenuItem key={option} value={option} className={`option-${index + 1}`}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
